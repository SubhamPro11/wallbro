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

// ==================== ADMIN CREDENTIALS ====================
const ADMIN_CREDENTIALS = {
    userId: 'subhamkr2611',
    password: 'badboystone@11'
};

let adminLoggedIn = false;
let currentWallpaperId = null;

// ==================== THEME MANAGEMENT ====================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateThemeIcon(theme) {
    const themeBtn = document.querySelector('.theme-toggle-btn i');
    if (themeBtn) {
        if (theme === 'dark') {
            themeBtn.className = 'fas fa-sun';
        } else {
            themeBtn.className = 'fas fa-moon';
        }
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
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

    currentWallpaperId = wallpaperId;

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

    // Admin buttons
    const deleteBtn = document.getElementById('deleteBtn');
    const editBtn = document.getElementById('editBtn');

    if (adminLoggedIn) {
        deleteBtn.style.display = 'block';
        editBtn.style.display = 'block';
        deleteBtn.onclick = () => deleteWallpaper(wallpaperId);
        editBtn.onclick = () => editWallpaper(wallpaperId);
    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
    }

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

// ==================== ADMIN AUTHENTICATION ====================
function openAdminLogin() {
    if (adminLoggedIn) {
        openAdminPanel();
    } else {
        const modal = document.getElementById('adminLoginModal');
        modal.classList.add('show');
        document.getElementById('adminLoginForm').reset();
        document.getElementById('adminStatusMessage').textContent = '';
    }
}

function closeAdminLogin() {
    const modal = document.getElementById('adminLoginModal');
    modal.classList.remove('show');
}

function closeAdminPanel() {
    const modal = document.getElementById('adminPanelModal');
    modal.classList.remove('show');
}

function openAdminPanel() {
    if (!adminLoggedIn) {
        showErrorMessage('Please login first');
        return;
    }
    
    loadAdminPanel();
    const modal = document.getElementById('adminPanelModal');
    modal.classList.add('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }

    const adminLoginModal = document.getElementById('adminLoginModal');
    if (adminLoginModal) {
        adminLoginModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAdminLogin();
            }
        });
    }

    const adminPanelModal = document.getElementById('adminPanelModal');
    if (adminPanelModal) {
        adminPanelModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAdminPanel();
            }
        });
    }
}, { once: true });

function handleAdminLogin(e) {
    e.preventDefault();

    const userId = document.getElementById('adminUserId').value;
    const password = document.getElementById('adminPassword').value;
    const statusMsg = document.getElementById('adminStatusMessage');

    if (userId === ADMIN_CREDENTIALS.userId && password === ADMIN_CREDENTIALS.password) {
        adminLoggedIn = true;
        statusMsg.style.color = '#00b894';
        statusMsg.textContent = '✓ Login successful! Redirecting to admin panel...';
        
        setTimeout(() => {
            closeAdminLogin();
            openAdminPanel();
        }, 1000);
    } else {
        statusMsg.style.color = '#e74c3c';
        statusMsg.textContent = '✗ Invalid credentials';
    }
}

function adminLogout() {
    adminLoggedIn = false;
    closeAdminPanel();
    const adminBtn = document.querySelector('.admin-btn');
    if (adminBtn) {
        adminBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Admin';
    }
    showSuccessMessage('Logged out successfully');
}

function loadAdminPanel() {
    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const adminList = document.getElementById('adminWallpaperList');
    adminList.innerHTML = '';

    allWallpapers.forEach(wallpaper => {
        const item = document.createElement('div');
        item.className = 'admin-wallpaper-item';
        item.innerHTML = `
            <div class="admin-item-info">
                <h4>${wallpaper.title}</h4>
                <p>${wallpaper.category} - ${wallpaper.type.toUpperCase()}</p>
                <p>By: ${wallpaper.artist}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn btn-warning btn-small" onclick="openWallpaperEditForm(${wallpaper.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="confirmDeleteWallpaper(${wallpaper.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        adminList.appendChild(item);
    });
}

function deleteWallpaper(wallpaperId) {
    if (!adminLoggedIn) {
        showErrorMessage('Admin access required');
        return;
    }

    if (confirm('Are you sure you want to delete this wallpaper?')) {
        // Remove from PC wallpapers
        const pcIndex = wallpaperData.pc.findIndex(w => w.id === wallpaperId);
        if (pcIndex > -1) {
            wallpaperData.pc.splice(pcIndex, 1);
        }

        // Remove from Mobile wallpapers
        const mobileIndex = wallpaperData.mobile.findIndex(w => w.id === wallpaperId);
        if (mobileIndex > -1) {
            wallpaperData.mobile.splice(mobileIndex, 1);
        }

        closeModal();
        loadWallpapers();
        showSuccessMessage('Wallpaper deleted successfully');
    }
}

function confirmDeleteWallpaper(wallpaperId) {
    if (!adminLoggedIn) {
        showErrorMessage('Admin access required');
        return;
    }

    if (confirm('Are you sure you want to delete this wallpaper?')) {
        deleteWallpaper(wallpaperId);
        loadAdminPanel();
    }
}

function editWallpaper(wallpaperId) {
    if (!adminLoggedIn) {
        showErrorMessage('Admin access required');
        return;
    }

    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const wallpaper = allWallpapers.find(w => w.id === wallpaperId);

    if (!wallpaper) return;

    const newTitle = prompt('Enter new title:', wallpaper.title);
    if (newTitle === null) return;

    const newDescription = prompt('Enter new description:', wallpaper.description);
    if (newDescription === null) return;

    const newArtist = prompt('Enter new artist name:', wallpaper.artist);
    if (newArtist === null) return;

    // Update in both arrays
    const pcWallpaper = wallpaperData.pc.find(w => w.id === wallpaperId);
    if (pcWallpaper) {
        pcWallpaper.title = newTitle;
        pcWallpaper.description = newDescription;
        pcWallpaper.artist = newArtist;
    }

    const mobileWallpaper = wallpaperData.mobile.find(w => w.id === wallpaperId);
    if (mobileWallpaper) {
        mobileWallpaper.title = newTitle;
        mobileWallpaper.description = newDescription;
        mobileWallpaper.artist = newArtist;
    }

    closeModal();
    loadWallpapers();
    showSuccessMessage('Wallpaper updated successfully');
}

function openWallpaperEditForm(wallpaperId) {
    if (!adminLoggedIn) {
        showErrorMessage('Admin access required');
        return;
    }

    editWallpaper(wallpaperId);
    loadAdminPanel();
}

function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
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