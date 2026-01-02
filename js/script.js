// ==================== SAMPLE WALLPAPER DATA ====================
const wallpaperData = {
    pc: [
        { id: 1, title: 'Mountain Serenity', category: 'nature', type: 'pc', description: 'Beautiful mountain landscape', artist: 'Nature Studio', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%235d6c7d" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EMountain Serenity%3C/text%3E%3C/svg%3E' },
        { id: 2, title: 'Ocean Wave', category: 'nature', type: 'pc', description: 'Peaceful ocean view', artist: 'Wave Master', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%231e90ff" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EOcean Wave%3C/text%3E%3C/svg%3E' },
        { id: 3, title: 'Abstract Colors', category: 'abstract', type: 'pc', description: 'Vibrant abstract design', artist: 'Color Artist', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ff6b9d" width="200" height="300"/%3E%3Crect fill="%23c44569" x="200" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EAbstract Colors%3C/text%3E%3C/svg%3E' },
        { id: 4, title: 'Tech Future', category: 'technology', type: 'pc', description: 'Modern technology theme', artist: 'Tech Designer', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%230a0e27" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3ETech Future%3C/text%3E%3C/svg%3E' },
        { id: 5, title: 'Minimalist', category: 'minimalist', type: 'pc', description: 'Simple and clean design', artist: 'Min Designer', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f5f5f5" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23333" text-anchor="middle" dy=".3em"%3EMinimalist%3C/text%3E%3C/svg%3E' },
        { id: 6, title: 'Artistic Blend', category: 'art', type: 'pc', description: 'Beautiful artistic creation', artist: 'Art Master', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d4af37" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3EArtistic Blend%3C/text%3E%3C/svg%3E' }
    ],
    mobile: [
        { id: 7, title: 'Sunset Mobile', category: 'nature', type: 'mobile', description: 'Beautiful mobile wallpaper', artist: 'Sunset Studio', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%23ff8c42" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3ESunset Mobile%3C/text%3E%3C/svg%3E' },
        { id: 8, title: 'Forest Trail', category: 'nature', type: 'mobile', description: 'Green forest path', artist: 'Forest Studio', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%2327ae60" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EForest Trail%3C/text%3E%3C/svg%3E' },
        { id: 9, title: 'Digital Art', category: 'abstract', type: 'mobile', description: 'Digital abstract design', artist: 'Digital Creator', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%239b59b6" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EDigital Art%3C/text%3E%3C/svg%3E' },
        { id: 10, title: 'Neon Lights', category: 'technology', type: 'mobile', description: 'Neon tech design', artist: 'Neon Studio', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%23000" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%2300ff00" text-anchor="middle" dy=".3em"%3ENeon Lights%3C/text%3E%3C/svg%3E' },
        { id: 11, title: 'Clean White', category: 'minimalist', type: 'mobile', description: 'Clean minimal wallpaper', artist: 'Minimal Studio', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%23ffffff" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23333" text-anchor="middle" dy=".3em"%3EClean White%3C/text%3E%3C/svg%3E' },
        { id: 12, title: 'Canvas Art', category: 'art', type: 'mobile', description: 'Mobile canvas artwork', artist: 'Canvas Master', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%238b4513" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3ECanvas Art%3C/text%3E%3C/svg%3E' }
    ]
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadWallpapers();
    setupEventListeners();
    loadFavorites();
}

// ==================== LOAD WALLPAPERS ====================
function loadWallpapers() {
    // Load PC Wallpapers
    const pcGrid = document.getElementById('pc-grid');
    displayWallpapers(wallpaperData.pc, pcGrid, 'all');

    // Load Mobile Wallpapers
    const mobileGrid = document.getElementById('mobile-grid');
    displayWallpapers(wallpaperData.mobile, mobileGrid, 'all');
}

function displayWallpapers(wallpapers, gridElement, selectedCategory = 'all') {
    gridElement.innerHTML = '';

    const filtered = selectedCategory === 'all' 
        ? wallpapers 
        : wallpapers.filter(w => w.category === selectedCategory);

    if (filtered.length === 0) {
        gridElement.innerHTML = '<p class="empty-message">No wallpapers found in this category.</p>';
        return;
    }

    filtered.forEach(wallpaper => {
        const card = createWallpaperCard(wallpaper);
        gridElement.appendChild(card);
    });
}

function createWallpaperCard(wallpaper) {
    const card = document.createElement('div');
    card.className = 'wallpaper-card';
    card.innerHTML = `
        <div style="position: relative; overflow: hidden;">
            <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-image">
            <div class="wallpaper-overlay">
                <button class="overlay-button" onclick="openWallpaperModal(${wallpaper.id})">
                    <i class="fas fa-expand-alt"></i> View
                </button>
            </div>
        </div>
        <div class="wallpaper-info">
            <h3 class="wallpaper-title">${wallpaper.title}</h3>
            <div>
                <span class="wallpaper-category">${wallpaper.category}</span>
                <span class="wallpaper-type">${wallpaper.type.toUpperCase()}</span>
            </div>
        </div>
    `;
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openWallpaperModal(wallpaper.id));
    return card;
}

// ==================== CATEGORY FILTERING ====================
function setupEventListeners() {
    // Category buttons for PC
    const pcCategoryBtns = document.querySelectorAll('[data-type="pc"]');
    pcCategoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            document.querySelectorAll('[data-type="pc"]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and display
            const pcGrid = document.getElementById('pc-grid');
            displayWallpapers(wallpaperData.pc, pcGrid, category);
        });
    });

    // Category buttons for Mobile
    const mobileCategoryBtns = document.querySelectorAll('[data-type="mobile"]');
    mobileCategoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            document.querySelectorAll('[data-type="mobile"]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and display
            const mobileGrid = document.getElementById('mobile-grid');
            displayWallpapers(wallpaperData.mobile, mobileGrid, category);
        });
    });

    // Modal close
    const modal = document.getElementById('wallpaperModal');
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    const fileUploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.getElementById('wallpaperImage');

    // Drag and drop
    fileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUploadArea.style.borderColor = 'white';
        fileUploadArea.style.backgroundColor = 'rgba(255,255,255,0.2)';
    });

    fileUploadArea.addEventListener('dragleave', () => {
        fileUploadArea.style.borderColor = 'rgba(255,255,255,0.5)';
        fileUploadArea.style.backgroundColor = 'rgba(255,255,255,0.1)';
    });

    fileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        fileInput.files = files;
        previewImage(files[0]);
    });

    fileUploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            previewImage(e.target.files[0]);
        }
    });

    // Form submission
    uploadForm.addEventListener('submit', handleUploadSubmit);

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== IMAGE PREVIEW ====================
function previewImage(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('uploadPreview');
            const img = document.getElementById('previewImage');
            img.src = e.target.result;
            preview.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
}

// ==================== UPLOAD HANDLING ====================
function handleUploadSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('wallpaperTitle').value;
    const type = document.getElementById('wallpaperType').value;
    const category = document.getElementById('wallpaperCategory').value;
    const description = document.getElementById('wallpaperDescription').value;
    const artist = document.getElementById('artistName').value || 'Anonymous';
    const imageInput = document.getElementById('wallpaperImage');

    if (imageInput.files.length === 0) {
        alert('Please select an image');
        return;
    }

    const file = imageInput.files[0];

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
    }

    // Read image as data URL and create wallpaper object
    const reader = new FileReader();
    reader.onload = function(e) {
        const newWallpaper = {
            id: Date.now(),
            title: title,
            category: category,
            type: type === 'both' ? 'both' : type,
            description: description,
            artist: artist,
            image: e.target.result
        };

        // Add to wallpaper data
        if (type === 'pc' || type === 'both') {
            wallpaperData.pc.unshift(newWallpaper);
        }
        if (type === 'mobile' || type === 'both') {
            wallpaperData.mobile.unshift(newWallpaper);
        }

        // Show success message
        showSuccessMessage('Wallpaper uploaded successfully!');

        // Reset form
        document.getElementById('uploadForm').reset();
        document.getElementById('uploadPreview').style.display = 'none';

        // Reload wallpapers
        loadWallpapers();
    };
    reader.readAsDataURL(file);
}

function showSuccessMessage(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00b894;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== MODAL HANDLING ====================
function openWallpaperModal(wallpaperId) {
    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const wallpaper = allWallpapers.find(w => w.id === wallpaperId);

    if (!wallpaper) return;

    document.getElementById('modalImage').src = wallpaper.image;
    document.getElementById('modalTitle').textContent = wallpaper.title;
    document.getElementById('modalDescription').textContent = wallpaper.description || 'No description available';
    document.getElementById('modalArtist').textContent = `By ${wallpaper.artist}`;

    // Download button
    document.getElementById('downloadBtn').onclick = () => downloadWallpaper(wallpaper);

    // Favorite button
    const favoriteBtn = document.getElementById('favoriteBtn');
    const favorites = getFavorites();
    const isFavorite = favorites.some(fav => fav.id === wallpaper.id);
    
    if (isFavorite) {
        favoriteBtn.classList.add('active');
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
    } else {
        favoriteBtn.classList.remove('active');
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
    }

    favoriteBtn.onclick = () => toggleFavorite(wallpaper);

    const modal = document.getElementById('wallpaperModal');
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('wallpaperModal');
    modal.classList.remove('show');
}

// ==================== DOWNLOAD ====================
function downloadWallpaper(wallpaper) {
    const link = document.createElement('a');
    link.href = wallpaper.image;
    link.download = `${wallpaper.title.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showSuccessMessage('Download started!');
}

// ==================== FAVORITES ====================
function toggleFavorite(wallpaper) {
    let favorites = getFavorites();
    const index = favorites.findIndex(fav => fav.id === wallpaper.id);

    if (index > -1) {
        favorites.splice(index, 1);
        showSuccessMessage('Removed from favorites');
    } else {
        favorites.push(wallpaper);
        showSuccessMessage('Added to favorites');
    }

    localStorage.setItem('wallpaperFavorites', JSON.stringify(favorites));
    loadFavorites();
    
    // Update favorite button
    const favoriteBtn = document.getElementById('favoriteBtn');
    if (index > -1) {
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        favoriteBtn.classList.remove('active');
    } else {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        favoriteBtn.classList.add('active');
    }
}

function getFavorites() {
    const stored = localStorage.getItem('wallpaperFavorites');
    return stored ? JSON.parse(stored) : [];
}

function loadFavorites() {
    const favorites = getFavorites();
    const favoritesGrid = document.getElementById('favorites-grid');

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">No favorites yet. Start adding some!</p>';
        return;
    }

    favoritesGrid.innerHTML = '';
    displayWallpapers(favorites, favoritesGrid, 'all');
}

// ==================== ANIMATIONS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);