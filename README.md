# WallHub - Wallpaper Sharing Website

A modern, user-friendly wallpaper sharing platform with support for both PC and mobile wallpapers.

## Features

### 🎨 Core Features
- **PC Wallpapers Section**: Browse high-quality desktop wallpapers (1920x1080+)
- **Mobile Wallpapers Section**: Discover beautiful smartphone wallpapers (1080x1920+)
- **Category Filtering**: Browse wallpapers by categories:
  - Nature
  - Abstract
  - Technology
  - Art
  - Minimalist
- **Upload Functionality**: Users can upload their own wallpapers
- **Drag & Drop Upload**: Easy file upload with drag-and-drop support
- **Download**: Download wallpapers in original quality
- **Favorites**: Save favorite wallpapers locally
- **Responsive Design**: Works seamlessly on all devices

### 🎯 User-Friendly Features
- Clean and intuitive navigation
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Modal view for detailed wallpaper information
- Real-time image preview during upload
- File size validation (max 10MB)
- Supported formats: JPG, PNG, WebP
- Toast notifications for user actions
- Hamburger menu for mobile devices
- Sticky navigation bar
- Local storage for favorites

## Project Structure

```
wallweb/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main stylesheet with responsive design
│   └── utilities.css   # Utility classes
├── js/
│   └── script.js       # JavaScript functionality
└── README.md          # This file
```

## How to Use

### View Wallpapers
1. Open `index.html` in your web browser
2. Navigate to "PC Wallpapers" or "Mobile Wallpapers" sections
3. Use category buttons to filter wallpapers
4. Click on any wallpaper to view details
5. Click "Download" to save the wallpaper or "Add to Favorites" to save locally

### Upload Wallpapers
1. Click the "Upload" button in the navigation or go to the upload section
2. Fill in the wallpaper details:
   - Title (required)
   - Type: PC, Mobile, or Both
   - Category
   - Description (optional)
   - Your Name/Artist Name (optional)
3. Upload your image by:
   - Dragging and dropping into the upload area
   - Clicking to browse files
4. Preview the image before uploading
5. Click "Upload Wallpaper" to submit

### Manage Favorites
1. Click the heart icon on any wallpaper to add to favorites
2. Go to "Favorites" section to view your saved wallpapers
3. Favorites are saved locally in your browser

## Color Scheme

- **Primary Color**: `#6c5ce7` (Purple)
- **Secondary Color**: `#00b894` (Green)
- **Dark Background**: `#1a1a2e`
- **Light Background**: `#f8f9fa`
- **Text Dark**: `#2d3436`
- **Text Light**: `#636e72`

## Responsive Design

The website is fully responsive and works on:
- Desktop computers (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 480px)

All elements scale and reposition appropriately for smaller screens.

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Data Storage

- **Wallpapers**: Stored in JavaScript array (can be extended with backend)
- **Favorites**: Stored in browser's LocalStorage
- **Uploads**: Converted to Data URLs (can be extended with backend storage)

## Future Improvements

### Coming Soon
- Backend integration for persistent data storage
- User authentication and accounts
- Advanced search and filtering
- Trending wallpapers section
- User ratings and reviews
- Share on social media
- Cloud storage integration
- Admin dashboard
- Wallpaper statistics
- Collection/Album feature
- Advanced image optimization
- Watermarking system
- Payment integration for premium wallpapers
- Mobile app version
- Notification system
- Comments and community features

### Technical Improvements
- Database integration (MongoDB, MySQL)
- API development (REST/GraphQL)
- Authentication (JWT, OAuth)
- Image optimization and CDN
- Caching strategies
- Performance optimization
- SEO enhancement
- Analytics integration
- Error logging and monitoring
- Unit and integration testing

## Code Quality

The code follows best practices:
- Semantic HTML structure
- CSS Grid and Flexbox for layouts
- Modular JavaScript functions
- Utility-first CSS approach
- Responsive mobile-first design
- Accessibility considerations
- Clean and commented code

## Getting Started

1. Download or clone the project
2. Open `index.html` in your web browser
3. Start exploring and uploading wallpapers!

No installation or dependencies required - it's a pure HTML/CSS/JavaScript project!

## File Size Limits

- Maximum upload size: 10MB
- Recommended image sizes:
  - PC: 1920x1080 or higher
  - Mobile: 1080x1920 or higher

## Tips for Best Experience

1. Use high-quality images for best results
2. Add descriptive titles and descriptions
3. Select appropriate categories
4. Keep image dimensions within recommended ranges
5. Use supported formats (JPG, PNG, WebP)
6. Organize favorites into categories

## Support

For issues, suggestions, or feature requests, please contribute to the project!

## License

This project is open source and available under the MIT License.

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Created with ❤️ for wallpaper lovers**