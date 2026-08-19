# Tanya Gupta — Portfolio (Vite + React)

An animated, single-page portfolio styled as a **live analytics report** —
built to match the world Tanya actually works in (Power BI dashboards, SQL
reports, KPI tiles), instead of a generic template.

- Dark "report canvas" theme with a teal + amber accent pair (the teal is
  pulled straight from the headshot's backdrop colour).
- Hero section styled as two dashboard widgets: a profile card and a
  "report canvas" with animated, count-up KPI tiles and a self-drawing
  line chart (pure SVG + CSS, no chart library).
- Scroll-triggered panel reveals, hover micro-interactions on project
  cards, and a subtle ambient background — all disabled automatically if
  the visitor has `prefers-reduced-motion` turned on.
- Your photo is embedded directly as a **base64 data URL** — no separate
  image file to lose track of, no broken image links after deploying.

---

## 1. Requirements

- [Node.js](https://nodejs.org/) **18 or newer** (Vite 5 requires it)
- npm (comes with Node)

Check your version:
```bash
node -v
```

---

## 2. Run it locally

```bash
# 1. Unzip the project, then move into the folder
cd tanya-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in
your browser — the page hot-reloads as you edit files.

---

## 3. Build for deployment

```bash
npm run build
```

This creates a `dist/` folder with the final static site (HTML, CSS, JS,
plus your resume PDF). `dist/` is what you deploy — you can drag-and-drop
it onto any static host:

- **Netlify** — drag the `dist` folder into the Netlify dashboard, or
  connect the GitHub repo and set build command `npm run build`, publish
  directory `dist`.
- **Vercel** — import the repo, framework preset "Vite", it auto-detects
  the build command and output folder.
- **GitHub Pages** — run `npm run build`, then push the contents of
  `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package).

To preview the production build locally before deploying:
```bash
npm run preview
```

---

## 4. Project structure

```
tanya-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── Tanya_Gupta_Resume.pdf     ← powers the "Download Resume" buttons
└── src/
    ├── main.jsx                    ← React entry point
    ├── App.jsx                     ← page layout / section order
    ├── index.css                   ← design tokens + all styling
    ├── data/
    │   ├── profile.js              ← ALL your resume content lives here
    │   └── photo.js                ← your photo, as a base64 data URL
    ├── hooks/
    │   ├── useCountUp.js           ← animates the KPI numbers
    │   └── useReveal.js            ← scroll-in animation for panels
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx                ← profile widget + report canvas widget
        ├── ReportChart.jsx         ← the animated SVG line chart
        ├── KpiTile.jsx
        ├── Summary.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Achievements.jsx
        └── Contact.jsx
```

---

## 5. How to customize

### Edit your content
Everything text-based — name, summary, skills, projects, education,
certifications, achievements — lives in **`src/data/profile.js`**. Change
values there and every section updates automatically; you don't need to
touch the component files unless you want to change layout.

### Replace the photo
The photo is stored as base64 in `src/data/photo.js`, exported as
`profilePhoto`. To swap it for a new image:

```bash
# From the project root, with Python 3 installed:
python3 -c "
import base64
with open('new-photo.jpg', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')
print('export const profilePhoto = \"data:image/jpeg;base64,' + b64 + '\";')
" > src/data/photo.js
```
Use `image/png` instead of `image/jpeg` in the string if your new file is
a PNG. Keep the source image reasonably small (under ~150 KB) so the page
stays fast — resize/compress it first if it's a large phone photo.

> **Why base64 instead of a normal `<img src="/photo.jpg">`?** You asked
> for the photo embedded as base64 specifically — it keeps the image
> bundled inside the JS itself, so there's no separate file that can go
> missing when you move or redeploy the project. The tradeoff is a
> slightly larger JS bundle, which is why keeping the source photo small
> matters.

### Replace the resume PDF
Drop your updated PDF into `public/` and rename it to
`Tanya_Gupta_Resume.pdf` (or update the `href` in `Nav.jsx` and
`Contact.jsx` if you rename it to something else).

### Change the color palette
All colors are CSS variables at the top of `src/index.css` under `:root`
— change `--teal` and `--amber` there to re-theme the entire site in one
place.

### Add or remove a project
Add/remove objects in the `projects` array inside `src/data/profile.js`.
Each project needs: `title`, `tool`, `description`, `metrics` (array of
`{ label, value }`), and `stack` (array of strings).

---

## 6. Notes on the animations

- **KPI count-up**: numbers animate from 0 to their target value once on
  page load (`src/hooks/useCountUp.js`).
- **Chart draw-in**: the SVG line uses a `stroke-dashoffset` transition
  that "draws" the line on load (`src/components/ReportChart.jsx`). The
  chart's trend data is illustrative — it exists to give the hero a
  living focal point, not to represent a specific real metric.
- **Scroll reveals**: each section fades/slides in the first time it
  scrolls into view, via `IntersectionObserver`
  (`src/hooks/useReveal.js`, wrapped by `src/components/Reveal.jsx`).
- All of the above are automatically skipped (content just appears
  instantly) if the visitor's OS has "reduce motion" turned on —
  accessibility is handled for you, no extra work needed.

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Confirm Node ≥ 18 with `node -v`; delete `node_modules` and `package-lock.json`, then retry |
| Blank page in browser | Open the browser console for the error; most often a typo in `profile.js` |
| Resume button downloads nothing | Confirm the PDF is at `public/Tanya_Gupta_Resume.pdf` exactly |
| Fonts look off | The page loads Space Grotesk / Inter / JetBrains Mono from Google Fonts — you'll need an internet connection the first time each font loads |
