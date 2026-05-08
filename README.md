# Seeyou · Portfolio (SP11)

Personal portfolio site. Hand-built in HTML, CSS, and vanilla JS — no frameworks, no build step.

## Tagline
> Psychologist by training. Designer by practice. Lawyer in progress. Builder by choice.

## Stack
- HTML, CSS (custom properties + modular sections), vanilla JS (ES modules)
- Hosted on GitHub Pages
- Fonts: Inter + Geist + Geist Mono (Google Fonts), General Sans (Fontshare)

## Local development

The JS uses `fetch()` to load `data/projects.json`, so you need a local server (the `file://` protocol blocks fetch). Easiest options:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit http://localhost:8000

> If you open `index.html` directly via `file://`, the projects list will fall back to inline data — the rest of the site still works.

## Structure

```
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── variables.css       Design tokens
│   │   ├── reset.css
│   │   ├── main.css            Imports + global styles
│   │   └── sections/           Per-section styles
│   ├── js/
│   │   ├── main.js             Entry
│   │   ├── navbar.js           Scroll state, active section, mobile toggle
│   │   └── projects.js         Renders projects from JSON
│   └── images/
└── data/
    └── projects.json           Project list — edit to add/update
```

## Adding a project

Edit `data/projects.json`:

```json
{
  "id": "SP12",
  "title": "Project name",
  "description": "One or two sentences.",
  "tags": ["tag1", "tag2"],
  "status": "in-progress",
  "url": "#"
}
```

`status` is one of `in-progress`, `deployed`, or any custom string.

## Deploy (GitHub Pages)

1. Push to a GitHub repo
2. Settings → Pages → Source: deploy from `main` branch, root
3. Done
