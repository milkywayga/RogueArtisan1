# Rogue Artisan — GitHub Pages site

A static three-page leathercraft portfolio built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — home page
- `commissions.html` — commission / maker's-choice inquiry
- `works.html` — responsive slideshow
- `styles.css` — all visual styling
- `script.js` — mobile nav, slideshow controls, and commission email handling
- `images/` — supplied leatherwork photography

## Before publishing
1. Open `script.js`.
2. Find `YOUR_EMAIL@example.com`.
3. Replace it with the email address where you want commission inquiries sent.
4. Replace the working name "Rogue Artisan" with your own maker/business name if desired.

## GitHub Pages
1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will publish the site at your GitHub Pages address.

The site has no server-side code, so it works directly on GitHub Pages.

## About the commission form
Because GitHub Pages is static hosting, the form currently prepares a `mailto:` inquiry. This is intentionally simple and requires no backend. For a more polished production setup, the form can later be connected to a form service or a small serverless endpoint without changing the site's visual design.
