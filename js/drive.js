/**
 * Google Drive Integration Service
 * Handles fetching wallpapers from a specific public folder.
 */

const DriveService = {
    // Configuration
    config: {
        // User provided Client ID: 114298893694-g3o8n5807gbo6h8lf3r24isq1imj75k6.apps.googleusercontent.com
        // NOTE: This is a Client ID, not an API Key. Using Mock Data for now.
        // To make this live, I need an API Key (starts with "AIza").
        apiKey: '',
        folderId: '1n08vHThPJFzQjtw03QkRAcoq1fMjmAu5',
        useMockData: true
    },

    // Cache to prevent hitting API quota
    cache: {
        data: null,
        timestamp: 0,
        expiry: 5 * 60 * 1000 // 5 minutes
    },

    /**
     * Fetch wallpapers from the configured Google Drive folder
     */
    async fetchWallpapers() {
        // Return cache if valid
        if (this.cache.data && (Date.now() - this.cache.timestamp < this.cache.expiry)) {
            console.log('Serving from cache');
            return this.cache.data;
        }

        if (this.config.useMockData || !this.config.apiKey) {
            console.warn('Using Mock Data (No API Key provided)');
            const mockData = await this.getMockData();
            this.cache.data = mockData;
            this.cache.timestamp = Date.now();
            return mockData;
        }

        try {
            // Fetch file list
            const query = `'${this.config.folderId}' in parents and trashed = false and mimeType contains 'image/'`;
            const fields = 'files(id, name, description, webContentLink, thumbnailLink, imageMediaMetadata)';
            const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&key=${this.config.apiKey}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Drive API Error: ${response.statusText}`);
            }

            const data = await response.json();
            const wallpapers = this.processDriveFiles(data.files || []);

            this.cache.data = wallpapers;
            this.cache.timestamp = Date.now();

            return wallpapers;
        } catch (error) {
            console.error('Failed to fetch from Drive:', error);
            // Fallback to local data if Drive fails
            return { pc: [], mobile: [] };
        }
    },

    /**
     * Process raw Drive files into App compatible format
     */
    processDriveFiles(files) {
        const pc = [];
        const mobile = [];

        files.forEach(file => {
            // Basic metadata parsing from description (format: "category:nature, artist:Name")
            let category = 'abstract'; // default
            let artist = 'Unknown';
            let type = 'pc';

            if (file.description) {
                const descLower = file.description.toLowerCase();
                if (descLower.includes('mobile')) type = 'mobile';

                // Simple keyword matching for category
                if (descLower.includes('nature')) category = 'nature';
                else if (descLower.includes('tech')) category = 'technology';
                else if (descLower.includes('art')) category = 'art';
                else if (descLower.includes('min')) category = 'minimalist';

                // Extract artist if formatted "artist:Name"
                const artistMatch = file.description.match(/artist:\s*([^,]+)/i);
                if (artistMatch) artist = artistMatch[1].trim();
            } else {
                // Infer type from dimensions if available
                if (file.imageMediaMetadata) {
                    const { width, height } = file.imageMediaMetadata;
                    if (height > width) type = 'mobile';
                }
            }

            // High res link construction (webContentLink usually forces download)
            // Using ID to construct a viewable link: https://lh3.googleusercontent.com/d/{ID} is often blocked
            // Best reliable for apps: https://drive.google.com/uc?export=view&id={ID}
            const imageUrl = `https://drive.google.com/uc?export=view&id=${file.id}`;

            const wallpaper = {
                id: file.id,
                title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
                category: category,
                type: type,
                description: file.description || 'Google Drive Wallpaper',
                artist: artist,
                image: imageUrl,
                driveId: file.id // Store real ID for downloading
            };

            if (type === 'mobile') mobile.push(wallpaper);
            else pc.push(wallpaper);
        });

        return { pc, mobile };
    },

    /**
     * Download file via Blob to mask source
     */
    async downloadFile(wallpaper, onProgress) {
        try {
            const response = await fetch(wallpaper.image);
            if (!response.ok) throw new Error('Network response was not ok');

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `${wallpaper.title}.png`; // Force clean filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up
            setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);
            return true;
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: Direct window open if blob fetch fails (CORS)
            window.open(wallpaper.image, '_blank');
            return false;
        }
    },

    /**
     * Mock Data Generator for testing
     */
    async getMockData() {
        // Return structure identical to script.js initial data but pretending to be from Drive
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    pc: [
                        { id: 'mock1', title: 'Drive Mountain', category: 'nature', type: 'pc', description: 'Loaded from Drive Mock', artist: 'Cloud', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                        { id: 'mock2', title: 'Drive City', category: 'technology', type: 'pc', description: 'Loaded from Drive Mock', artist: 'Cloud', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
                    ],
                    mobile: [
                        { id: 'mock3', title: 'Drive Forest', category: 'nature', type: 'mobile', description: 'Loaded from Drive Mock', artist: 'Cloud', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }
                    ]
                });
            }, 800); // Simulate network delay
        });
    }
};
