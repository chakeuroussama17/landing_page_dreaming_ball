# Boundless — Landing Page

A hyper-dynamic, dark, Gen-Z promo page for the Boundless app.
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
- Brand colours come from the club crest and mirror the app's tokens
  (`lib/core/theme/app_colors.dart`): gold `#C9A961`, deep gold `#8A6A2F`,
  light gold `#F0D89B`, cream `#F5EBD2`, navy `#131C2E`, ink `#0A0F1A`.
  They are defined once as CSS custom properties at the top of
  `css/styles.css` and mirrored into the Tailwind config in `index.html` —
  change both if you retune the palette.
- Gold is a **light** colour, so anything filled with it takes dark (ink)
  content. Surfaces that must carry white text use the deeper antique pair
  `#5E4A20`→`#8F6F32`, which holds white at 4.7:1.
- Replace the placeholder stat numbers in the hero with real figures.
- Add real social links in the footer.
- Add a 1200×630 `pictures/og_image.png` for social sharing; `og:image`
  currently falls back to the crest.
- The phone screenshots in `pictures/` are from the old pink/orange build and
  no longer match the app. Recapture them from the rebranded app.
