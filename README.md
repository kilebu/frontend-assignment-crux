# Oresmon Storefront — Frontend Assignment

A homepage inspired by [0resmon.tebex.io](https://0resmon.tebex.io/), built as part of a frontend hiring assignment.

**Live Demo:** [your-deployment-link.vercel.app](https://your-deployment-link.vercel.app)

---

## Assignment Brief

> Build a homepage inspired by the Oresmon Tebex storefront using HTML, CSS/Tailwind, and JavaScript where necessary. The implementation should be fully responsive, visually consistent, and reflect thoughtful design judgment — not necessarily a pixel-perfect copy.

---

## Tech Stack

| | |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS v3 (CDN) + custom CSS variables |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Rajdhani + Inter |
| Icons | Inline SVG (no external icon library) |

No frameworks (React, Vue, Angular). No build tools. No dependencies to install.

---

## Project Structure

```
/
├── index.html      # All markup, styles, and scripts
└── README.md       # This file
```

The project is intentionally kept as a single file for simplicity and ease of review. There are no build steps — open `index.html` directly in a browser.

---

## Sections Implemented

| Section | Notes |
|---|---|
| Announcement bar | Discount banner with live countdown timer |
| Navigation | Logo, dropdown menus, currency selector, login CTA, mobile hamburger |
| Hero | Headline, subtext, CTA buttons, decorative SVG blob |
| Top-Selling Products | Responsive 4-column product card grid |
| Customer Reviews | Star ratings, avatar initials, Discord source attribution |
| Why Choose Us | 4 feature cards (Support, Performance, Ease of Use, Security) |
| Our Achievements | Animated counters triggered on scroll |
| YouTube | Video thumbnail cards with play button overlay |
| FAQ | Accordion with live keyword search |
| Recent Payments | Auto-scrolling payment feed |
| Discord CTA | Community invite section with bot illustration |
| Footer | Link columns, social icons, Tebex attribution bar |

---

## Design Decisions

A few intentional choices made beyond the reference site:

- **Typography:** Paired Rajdhani (display/headings) with Inter (body) to reinforce the gaming/tech aesthetic more clearly than the original's font stack.
- **Hero visual:** Replaced the reference's 3D render with a custom SVG shape to keep the page dependency-free while preserving the visual weight.
- **Color system:** Defined all brand colors as CSS custom properties (`--red`, `--dark`, `--card`, etc.) for consistency and easy theming.
- **Spacing & density:** Slightly increased section padding on desktop for a less cramped feel.
- **Animations:** Added scroll-triggered stat counters, FAQ accordion transitions, card hover lifts, and a countdown timer — kept subtle so they aid the experience without distracting from content.

---

## Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| Mobile (`< 768px`) | Hamburger menu, single-column layout throughout |
| Tablet (`768px – 1024px`) | 2-column product grid, stacked hero |
| Desktop (`> 1024px`) | Full 4-column grid, side-by-side hero, FAQ two-column layout |

---

## Running Locally

No installation or build step required.

```bash
git clone https://github.com/your-username/oresmon-assignment.git
cd oresmon-assignment
open index.html
```

Or drag `index.html` into any browser.

> Tailwind CSS and Google Fonts are loaded via CDN — an internet connection is needed for full rendering.

---

## Deployment

Deployed on **Vercel** via GitHub integration.

**Live link:** [your-deployment-link.vercel.app](https://your-deployment-link.vercel.app)

> Replace the live link above with your actual Vercel/Netlify URL before submitting.
