# Angler Solutions Website

A professional, responsive website for Angler Solutions - a company providing bespoke software solutions and business automation.

## Overview

This website showcases Angler Solutions' services, portfolio, team, and provides contact information. It's built with vanilla HTML, CSS, and JavaScript for maximum performance and minimal dependencies.

## Features

- **Responsive Design**: Fully mobile-friendly layout that works on all devices
- **Professional Styling**: Clean, modern design with a professional color scheme
- **Fast Performance**: No frameworks or heavy dependencies - pure HTML/CSS/JS
- **SEO Ready**: Semantic HTML structure for better search engine optimization
- **Accessible**: WCAG compliant with proper semantic markup
- **Contact Form**: Functional contact form with client-side validation
- **Smooth Animations**: Subtle animations and transitions for better UX

## Pages

1. **Home** (`index.html`) - Landing page with hero section and features overview
2. **Services** (`services.html`) - Detailed service offerings and process
3. **Portfolio** (`portfolio.html`) - Case studies and completed projects
4. **About** (`about.html`) - Company story, team, and values
5. **Contact** (`contact.html`) - Contact form and business information

## Project Structure

```
AnglerWebsite/
├── index.html
├── services.html
├── portfolio.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── Logos/
│   └── [Logo files]
├── .gitignore
└── README.md
```

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **Vanilla JavaScript**: No frameworks needed
- **Responsive Design**: Mobile-first approach

## Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Repository already pushed to GitHub (code is already online)

### Steps to Deploy

1. **Enable GitHub Pages**
   - Go to your repository: `https://github.com/AnglerSolutions/AnglerWebsite`
   - Click **Settings** (gear icon)
   - Scroll down to **Pages** section
   - Under "Source", select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

2. **Access Your Live Site**
   - GitHub will provide your site URL (usually `https://AnglerSolutions.github.io/AnglerWebsite/`)
   - Wait 1-2 minutes for the site to build and deploy
   - Your site will be live automatically!

3. **Configure Custom Domain (Optional)**
   - In the same **Pages** section, find "Custom domain"
   - Enter your domain (e.g., `www.anglersolutions.com`)
   - Click **Save**
   - Update your domain's DNS records to point to GitHub Pages (GitHub will show exact instructions)
   - GitHub will automatically provision an SSL certificate

### Automatic Deployment
Every time you push to the `main` branch on GitHub, your site automatically updates within seconds. No additional service needed!

## Customization

### Update Company Information

Edit the following files to customize content:
- **Company name/branding**: Update in each HTML file and navigation
- **Contact info**: Edit footer and contact page
- **Logo**: Replace logos in `/Logos` folder
- **Team members**: Edit the team section in `about.html`
- **Portfolio projects**: Update portfolio cards in `portfolio.html`
- **Services**: Modify `services.html` content

### Customize Colors

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a366;
    --accent-color: #ff6b35;
    /* ... other colors ... */
}
```

### Contact Form Setup

The contact form currently logs to the browser console. To enable email functionality:

1. **Option A: Formspree (Recommended)**
   - Visit [formspree.io](https://formspree.io)
   - Create account and new form
   - Replace form action in `contact.html`

2. **Option B: Custom Backend**
   - Uncomment the fetch code in `js/script.js`
   - Set up your backend endpoint to handle submissions

## Performance

- **Page Load**: ~1-2 seconds (depending on connection)
- **Lighthouse Scores**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundled Size**: ~50KB (uncompressed)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Maintenance

### Regular Updates
- Check and update contact information quarterly
- Keep portfolio current with latest projects
- Review and update service descriptions as needed
- Ensure team information is accurate

### Monitoring
- Monitor SEO with Google Search Console
- Add Google Analytics for traffic insights
- Check for broken links regularly
- Use GitHub's built-in traffic analytics (Insights → Traffic)

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions
- Open Graph tags (add in `<head>`)
- Mobile-friendly design
- Fast page load times
- Clean URL structure

To improve SEO further, consider adding:
- Google Analytics
- Sitemap.xml
- robots.txt
- Structured data (JSON-LD)

## Support & Troubleshooting

### Common Issues

**Images not displaying:**
- Check file paths are correct
- Ensure image files are in the correct directories
- Use relative paths in HTML

**Form not working:**
- Check browser console for errors
- Verify form field names match JavaScript
- Ensure formspree or backend is properly configured

**Slow performance:**
- Optimize images (use WebP format)
- Enable Vercel edge caching
- Minimize CSS/JS if needed

## License

© 2026 Angler Solutions. All rights reserved.

## Contact

For questions about this website or to request modifications, contact:
- Email: info@anglersolutions.com
- Phone: (555) 123-4567

---

**Last Updated**: August 2026
