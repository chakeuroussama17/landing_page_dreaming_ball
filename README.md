# Dreaming Ball — Landing Page

A hyper-dynamic, dark, Gen-Z promo page for the Dreaming Ball app.
Static site: HTML + Tailwind (CDN) + GSAP + Lenis + VanillaTilt. No build step.

## Preview locally
Just open `index.html` in a browser. For best results (so relative asset paths
and smooth scroll behave), run a tiny local server:

```bash
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

You'll see the full design immediately — every image shows a labelled
placeholder until you add the real asset.

## Add your assets
See [ASSETS.md](ASSETS.md). Drop files at the exact paths listed; they replace
the placeholders automatically (no code changes needed).

## Deploy (free)
Any static host works:
- **Netlify / Vercel:** drag-and-drop this folder, or connect the repo.
- **GitHub Pages:** push the folder and enable Pages.
- **Cloudflare Pages:** point it at the folder.

## Structure
```
index.html        — all sections (hero, how it works, features, organisers, download)
css/styles.css    — brand styles, phone mockups, placeholders, animations
js/main.js        — smooth scroll, 3D tilt, scroll reveals, placeholder swapping
pictures/         — ALL your images go here (see ASSETS.md for filenames)
```

## Notes
- Brand colours: pink `#FF3CAC` → orange `#FF8A00`, dark `#0A0A0F`, cyan accent.
- Replace the placeholder stat numbers in the hero with real figures.
- Add real social links in the footer.
