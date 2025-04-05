# Excel Mastery Training Website

This is a comprehensive online training platform for Excel and other courses taught by John Nyallu.

## Features

- Responsive design for all devices
- User authentication (login/registration)
- Course browsing by category
- User profile management
- Course enrollment and progress tracking
- Instructor profile with full CV

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- Google Fonts (Century Gothic)

## Deployment

This website can be deployed for free on GitHub Pages:

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Repository Settings > Pages
4. Select the main branch as the source
5. Your site will be published at `https://[your-username].github.io/[repository-name]/`

## Customization

To customize the website:

1. Replace placeholder images in the `/images` folder
2. Update course data in `js/main.js`
3. Modify instructor information in `instructor.html`
4. Change colors in `css/style.css` by editing the CSS variables at the top

## Security Notes

For a production environment:

1. Replace the client-side authentication with a proper server-side solution
2. Implement HTTPS for all connections
3. Add server-side validation for all forms
4. Use a proper database for user data instead of localStorage
5. Implement CSRF protection for forms

The current implementation is for demonstration purposes only.