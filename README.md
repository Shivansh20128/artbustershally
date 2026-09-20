# ArtBusterShally — Artist Portfolio

A responsive, image-focused artist portfolio website built with plain HTML, CSS and JavaScript.

## Folder structure

```text
artbustershally/
├── index.html
├── gallery.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── artist/
    └── artworks/
```

## Before publishing

1. Replace the placeholder SVG artwork files in `images/artworks/` with your sister's actual artwork photos.
2. Replace `images/artist/artist-placeholder.svg` with a good photograph of the artist.
3. Edit the artwork list in `js/main.js`.
4. Replace the dummy WhatsApp number and email address in `index.html`.
5. Update the About section with the artist's actual story.
6. Update the page title and description if desired.
7. Optionally replace the Google Fonts with locally hosted fonts if you want the site to work without an external font request.

## GitHub Pages

1. Create a new **public** GitHub repository, for example `artbustershally`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide the published Pages URL.

The site is static, so no server or database is required.

## Custom domain

After buying a domain, use GitHub Pages' **Custom domain** setting under Settings → Pages. Follow GitHub's DNS instructions for the registrar you use.

## Adding a painting

Add the image to `images/artworks/`, then add an object to the `artworks` array in `js/main.js`:

```js
{
  id: 10,
  title: "Your Painting",
  medium: "Acrylic",
  size: "24 × 36 in",
  year: "2026",
  status: "Available",
  image: "images/artworks/your-painting.jpg",
  description: "Your description."
}
```

Supported filters currently include:

- Acrylic
- Oil
- Sketch
- Mixed Media

You can add more categories by adding another filter button in the HTML and using the same value in the artwork data.

## Image recommendations

For the best results, photograph artwork straight-on in even lighting and export web images around 1600–2400 px on the longest side. WebP or high-quality JPEG is recommended for photographs.
