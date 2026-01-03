// ==================== WALLPAPER DATA ====================
// Data container - populated by DriveService
let wallpaperData = {
    pc: [],
    mobile: []
};

// Persistence functions (Optional: if we want to save Favorites to LocalStorage, we keep getFavorites/saveFavorites separately)
// But we remove the auto-load from localStorage for the main catalog since we are using Drive.
function saveWallpapers() {
    // No-op for main catalog if read-only from Drive
    // If we were uploading, we'd handle it differently.
}


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

// ==================== THEME MANAGEMENT ====================
function initializeTheme() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('wallpaperTheme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('wallpaperTheme', theme);

    // Update theme toggle button icon
    const themeBtn = document.querySelector('.theme-toggle-btn i');
    if (themeBtn) {
        if (theme === 'dark') {
            themeBtn.classList.remove('fa-moon');
            themeBtn.classList.add('fa-sun');
        } else {
            themeBtn.classList.remove('fa-sun');
            themeBtn.classList.add('fa-moon');
        }
    }
}

function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeApp();
});

async function initializeApp() {
    // Show loader
    const loader = document.getElementById('appLoader');
    if (loader) loader.style.display = 'flex';

    try {
        // Fetch from Drive (or Mock)
        const driveData = await DriveService.fetchWallpapers();
        wallpaperData = driveData;

    } catch (e) {
        console.error("Init Error", e);
    } finally {
        // Hide loader
        if (loader) loader.style.display = 'none';

        // Proceed with UI init
        if (document.getElementById('pc-grid')) {
            loadWallpapers();
            loadFeaturedWallpapers();
        }
        setupEventListeners();
        if (document.getElementById('favorites-grid')) {
            loadFavorites();
        }
        setupScrollListener();

        // Init animations (if functions exist)
        if (typeof initHeroAnimation === 'function') initHeroAnimation();
        if (typeof initScrollReveal === 'function') initScrollReveal();
    }
}

// ==================== LOAD WALLPAPERS ====================
function loadWallpapers() {
    // Load PC Wallpapers
    const pcGrid = document.getElementById('pc-grid');
    displayWallpapers(wallpaperData.pc, pcGrid, 'all');

    // Load Mobile Wallpapers
    const mobileGrid = document.getElementById('mobile-grid');
    displayWallpapers(wallpaperData.mobile, mobileGrid, 'all');

    // Update hero stats
    updateHeroStats();

    // Initialize Hero Animation
    initHeroAnimation();

    // Initialize Scroll Reveal
    initScrollReveal();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.wallpaper-card').forEach(card => {
        card.classList.add('fade-in-up');
        observer.observe(card);
    });
}

function loadFeaturedWallpapers() {
    // Get featured wallpapers (first 6 of combined data)
    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const featured = allWallpapers.slice(0, 6);

    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        displayWallpapers(featured, featuredGrid, 'all');
    }
}

function updateHeroStats() {
    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const heroCount = document.getElementById('heroTotalCount');
    if (heroCount) {
        heroCount.textContent = allWallpapers.length;
    }
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
    card.className = 'wallpaper-card fade-in-up'; // Add fade class

    // Check if favorite
    const favorites = getFavorites();
    const isFav = favorites.some(fav => fav.id === wallpaper.id);
    const activeClass = isFav ? 'active' : '';
    const heartIcon = isFav ? 'fas' : 'far';

    card.innerHTML = `
        <div style="position: relative; overflow: hidden;">
            <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-image">
            <div class="wallpaper-overlay">
                <button class="fav-overlay-btn ${activeClass}" onclick="event.stopPropagation(); toggleFavoriteFromCard(this, ${wallpaper.id})" title="Add to Favorites">
                    <i class="${heartIcon} fa-heart"></i>
                </button>
                <button class="overlay-button" onclick="openWallpaperModal(${wallpaper.id})">
                    <i class="fas fa-expand-alt"></i> View
                </button>
            </div>
            <div class="wallpaper-unavailable">
                <i class="fas fa-image"></i>
                <p>Wallpaper unavailable</p>
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

    // Handle image loading errors
    const img = card.querySelector('.wallpaper-image');
    img.addEventListener('error', function () {
        card.classList.add('image-error');
    });

    // Remove error state on successful load
    img.addEventListener('load', function () {
        card.classList.remove('image-error');
    });

    card.addEventListener('click', () => openWallpaperModal(wallpaper.id));
    return card;
}

function toggleFavoriteFromCard(btn, id) {
    const allWallpapers = [...wallpaperData.pc, ...wallpaperData.mobile];
    const wallpaper = allWallpapers.find(w => w.id === id);
    if (wallpaper) {
        toggleFavorite(wallpaper);

        // Update UI state based on new persistence state
        const favorites = getFavorites();
        const isFav = favorites.some(f => f.id === id);
        const icon = btn.querySelector('i');

        if (isFav) {
            btn.classList.add('active');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            btn.classList.remove('active');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    }
}

// ==================== CATEGORY FILTERING ====================
function setupEventListeners() {
    // Category buttons for PC
    const pcCategoryBtns = document.querySelectorAll('[data-type="pc"]');
    pcCategoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
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
        btn.addEventListener('click', function () {
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
    modal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        // Elements
        const fileUploadArea = document.getElementById('fileUploadArea');
        const fileInput = document.getElementById('wallpaperImage');
        const fileInfo = document.getElementById('fileInfo');
        const fileName = document.getElementById('fileName');
        const uploadMessage = document.getElementById('uploadMessage');
        const uploadBtn = document.getElementById('uploadBtn');

        // Live Preview Elements
        const previewTitle = document.getElementById('livePreviewTitle');
        const previewType = document.getElementById('livePreviewType');
        const previewCategory = document.getElementById('livePreviewCategory');
        const previewArtist = document.getElementById('livePreviewArtist');
        const previewImage = document.getElementById('livePreviewImage');

        // Input Elements for Event Listeners
        const titleInput = document.getElementById('wallpaperTitle');
        const typeInput = document.getElementById('wallpaperType');
        const categoryInput = document.getElementById('wallpaperCategory');
        const artistInput = document.getElementById('artistName');

        // --- Live Preview Logic ---
        if (titleInput && previewTitle) {
            titleInput.addEventListener('input', (e) => {
                previewTitle.textContent = e.target.value.trim() || 'Your Title Here';
            });
        }

        if (typeInput && previewType) {
            typeInput.addEventListener('change', (e) => {
                const map = { 'pc': 'PC', 'mobile': 'Mobile', 'both': 'PC & Mobile' };
                previewType.textContent = map[e.target.value] || 'PC';
            });
        }

        if (categoryInput && previewCategory) {
            categoryInput.addEventListener('change', (e) => {
                previewCategory.textContent = e.target.value || 'nature';
            });
        }

        if (artistInput && previewArtist) {
            artistInput.addEventListener('input', (e) => {
                previewArtist.textContent = e.target.value.trim() || 'Anonymous';
            });
        }

        const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
        const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

        // File validation helper
        function validateFile(file) {
            if (!file) return { valid: false, message: 'No file selected' };

            if (!ALLOWED_TYPES.includes(file.type)) {
                return { valid: false, message: 'Invalid file format. Please use JPG, PNG, or WebP' };
            }

            if (file.size > MAX_FILE_SIZE) {
                return { valid: false, message: 'File size exceeds 10MB limit' };
            }

            return { valid: true };
        }

        // Show message helper
        function showMessage(text, type = 'info') {
            uploadMessage.textContent = '';
            uploadMessage.className = `upload - message ${type} `;

            let icon = '';
            if (type === 'success') icon = '✓';
            else if (type === 'error') icon = '✕';
            else if (type === 'info') icon = 'ℹ';

            uploadMessage.innerHTML = `< span > ${icon}</span > <span>${text}</span>`;
            uploadMessage.style.display = 'flex';

            if (type !== 'error') {
                setTimeout(() => {
                    uploadMessage.style.display = 'none';
                }, 3000);
            }
        }

        // Display file info
        function displayFileInfo(file) {
            fileName.textContent = `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
            fileInfo.style.display = 'flex';
        }

        // Update Preview Image
        function updatePreviewImage(file) {
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (previewImage) previewImage.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }

        // Drag and drop
        fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            fileUploadArea.classList.add('dragover');
        });

        fileUploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            fileUploadArea.classList.remove('dragover');
        });

        fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            fileUploadArea.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const validation = validateFile(files[0]);
                if (validation.valid) {
                    fileInput.files = files;
                    displayFileInfo(files[0]);
                    updatePreviewImage(files[0]);
                } else {
                    showMessage(validation.message, 'error');
                }
            }
        });

        fileUploadArea.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const validation = validateFile(e.target.files[0]);
                if (validation.valid) {
                    displayFileInfo(e.target.files[0]);
                    updatePreviewImage(e.target.files[0]);
                } else {
                    showMessage(validation.message, 'error');
                    fileInput.value = '';
                    fileInfo.style.display = 'none';
                }
            }
        });

        // Form submission
        uploadForm.addEventListener('submit', handleUploadSubmit);
    }

    // Hamburger menu - Enhanced mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close menu for button clicks (theme toggle, admin)
                if (!e.target.closest('button')) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideNav = navMenu.contains(e.target);
            const isClickOnHamburger = hamburger.contains(e.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// ==================== IMAGE PREVIEW ====================
function previewImage(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
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

    const uploadForm = document.getElementById('uploadForm');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const uploadStatus = document.getElementById('uploadStatus');
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadMessage = document.getElementById('uploadMessage');

    const title = document.getElementById('wallpaperTitle').value;
    const type = document.getElementById('wallpaperType').value;
    const category = document.getElementById('wallpaperCategory').value;
    const description = document.getElementById('wallpaperDescription').value;
    const artist = document.getElementById('artistName').value || 'Anonymous';
    const imageInput = document.getElementById('wallpaperImage');

    if (imageInput.files.length === 0) {
        uploadMessage.innerHTML = '<span>✕</span><span>Please select an image</span>';
        uploadMessage.className = 'upload-message error';
        uploadMessage.style.display = 'flex';
        return;
    }

    const file = imageInput.files[0];

    // Validate file
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

    if (!ALLOWED_TYPES.includes(file.type)) {
        uploadMessage.innerHTML = '<span>✕</span><span>Invalid file format. Please use JPG, PNG, or WebP</span>';
        uploadMessage.className = 'upload-message error';
        uploadMessage.style.display = 'flex';
        return;
    }

    if (file.size > MAX_FILE_SIZE) {
        uploadMessage.innerHTML = '<span>✕</span><span>File size exceeds 10MB limit</span>';
        uploadMessage.className = 'upload-message error';
        uploadMessage.style.display = 'flex';
        return;
    }

    // Show progress
    uploadProgress.style.display = 'block';
    uploadBtn.disabled = true;
    progressFill.style.width = '0%';

    // Simulate upload progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 90) progress = 90;
        progressFill.style.width = progress + '%';
    }, 200);

    // Read image as data URL and create wallpaper object
    const reader = new FileReader();
    reader.onload = function (e) {
        clearInterval(progressInterval);
        progressFill.style.width = '100%';
        uploadStatus.textContent = 'Processing...';

        setTimeout(() => {
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

            // Save to localStorage
            saveWallpapers();

            // Hide progress
            uploadProgress.style.display = 'none';
            uploadBtn.disabled = false;

            // Show success message
            uploadMessage.innerHTML = '<span>✓</span><span>Wallpaper uploaded successfully! Thank you for sharing.</span>';
            uploadMessage.className = 'upload-message success';
            uploadMessage.style.display = 'flex';

            // Reset form
            uploadForm.reset();
            document.getElementById('uploadPreview').style.display = 'none';
            document.getElementById('fileInfo').style.display = 'none';

            // Reload wallpapers
        }, 800);
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
border - radius: 8px;
box - shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
z - index: 10000;
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
    document.getElementById('modalArtist').textContent = `By ${wallpaper.artist} `;

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
// ==================== DOWNLOAD ====================
async function downloadWallpaper(wallpaper) {
    showSuccessMessage('Preparing download...');

    // Use DriveService to download to hide location
    const success = await DriveService.downloadFile(wallpaper);

    if (success) {
        showSuccessMessage('Download started!');
    } else {
        showErrorMessage('Download failed. Opening directly...');
    }
}

// ==================== SCROLL UTILITIES ====================
function setupScrollListener() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    let scrollTimeout;

    // Debounce scroll events for better performance
    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        }, 100);
    }, { passive: true });

    // Improve mobile scroll performance
    document.addEventListener('touchstart', () => {
        // Disable animations during touch for smoother scrolling
        document.body.style.pointerEvents = 'auto';
    }, { passive: true });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openUploadTab() {
    // Highlight the upload section
    const uploadSection = document.getElementById('upload');
    if (uploadSection) {
        uploadSection.scrollIntoView({ behavior: 'smooth' });
    }
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

document.addEventListener('DOMContentLoaded', function () {
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }

    const adminLoginModal = document.getElementById('adminLoginModal');
    if (adminLoginModal) {
        adminLoginModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeAdminLogin();
            }
        });
    }

    const adminPanelModal = document.getElementById('adminPanelModal');
    if (adminPanelModal) {
        adminPanelModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeAdminPanel();
            }
        });
    }

    // Admin search and filter listeners
    const adminSearchInput = document.getElementById('adminSearchInput');
    if (adminSearchInput) {
        adminSearchInput.addEventListener('input', loadAdminPanel);
    }

    const adminFilterSelect = document.getElementById('adminFilterSelect');
    if (adminFilterSelect) {
        adminFilterSelect.addEventListener('change', loadAdminPanel);
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

    // Update statistics
    document.getElementById('pcWallpaperCount').textContent = wallpaperData.pc.length;
    document.getElementById('mobileWallpaperCount').textContent = wallpaperData.mobile.length;
    document.getElementById('totalWallpaperCount').textContent = allWallpapers.length;

    // Get filter values
    const searchQuery = document.getElementById('adminSearchInput')?.value.toLowerCase() || '';
    const filterType = document.getElementById('adminFilterSelect')?.value || 'all';

    // Filter wallpapers
    let filteredWallpapers = allWallpapers.filter(wallpaper => {
        const matchesSearch = wallpaper.title.toLowerCase().includes(searchQuery);
        const matchesType = filterType === 'all' || wallpaper.type === filterType;
        return matchesSearch && matchesType;
    });

    if (filteredWallpapers.length === 0) {
        adminList.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">No wallpapers found</div>';
        return;
    }

    filteredWallpapers.forEach(wallpaper => {
        const item = document.createElement('div');
        item.className = 'admin-wallpaper-item';
        item.innerHTML = `
    < div class="admin-item-info" >
                <h4>${wallpaper.title}</h4>
                <p><i class="fas fa-tag"></i> ${wallpaper.category}</p>
                <p><i class="fas fa-${wallpaper.type === 'pc' ? 'desktop' : 'mobile-alt'}"></i> ${wallpaper.type.toUpperCase()}</p>
                <p><i class="fas fa-user"></i> ${wallpaper.artist}</p>
            </div >
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
    loadAdminPanel();
    showSuccessMessage('Wallpaper deleted successfully');
}

function confirmDeleteWallpaper(wallpaperId) {
    if (!adminLoggedIn) {
        showErrorMessage('Admin access required');
        return;
    }

    if (confirm('Are you sure you want to delete this wallpaper?')) {
        deleteWallpaper(wallpaperId);
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
border - radius: 8px;
box - shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
z - index: 10000;
animation: slideIn 0.3s ease;
`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// ==================== HERO ANIMATION ====================
function initHeroAnimation() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        createParticles();
    }

    function createParticles() {
        particles = [];
        const count = Math.floor(width * height / 15000);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.1
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}
