# Portfolio Website

My portfolio website showcasing my projects and skills, built with love and care.

[![Live Demo](https://img.shields.io/badge/Demo-Live_App-blue?style=for-the-badge)](https://portfolio-iota-five-7oaswokhva.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## Preview

https://github.com/user-attachments/assets/b765ef7d-7d1c-44e3-baf2-17339498aa5c

## Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js
- **Styling:** Tailwind CSS, shadcn/ui, next-themes, Motion for React (animations)
- **Image optimization:** next-image-export-optimizer

## Features

- **Accessibility:** the website respects WCAG best practices including high-contrast colors, ARIA attributes, text size, theme preferences, forced colors, and reduced transparency.
- **Responsive:** support for all small, medium, and large screens (such as 4K screens).
- **Customizable:** different light and dark themes available.
- **Project Carousels:** each project has a carousel of images.
- **SEO Friendly:** acheived 100% score on Google Lightouse by using SSG rendering strategy. (I admit though this score is a joke as Lighthouse only tests basic stuff and shouldn't be relied on but I didn't find a better description for this point lol)

## Engineering Decisions

- **TypeScript:** type safety and powerful IDE support.
- **Next.js:** component-based development with shadcn/ui + SSG rendering strategy + out-of-box optimization (image & font optimization to reduce Cumulative Layout Shift).
- **next-image-export-optimizer:** optimizes images to use modern web formats such as WebP at build time for SSG apps since Next.js only optimizes images at runtime when using SSR rendering (It does prevent CLS though both in SSR and SSG modes)
- **shadcn/ui:** beautiful, accessible, and easy-to-edit components such as Carousels, Buttons, Popovers... It also comes with CSS variables to easily add support for different themes.
- **Motion for React:** high-performance animation library that supports SSR (prevents hydration flickering).
- **Accessibility Emulation:** emulate accessibility settings such as forced colors and reduced motion using browser DevTools in the Rendering tab (to open this tab, click `ctrl + shift + p` and type `Show Rendering`)

## Getting Started

To run the project locally, execute the following commands:

```bash
git clone https://github.com/AymeneBahmed/portfolio.git
cd portfolio
npm install
npm run dev
```

## Project Structure

```text
├── public/                             # Raw public assets (e.g., Resume)
├── src/                                # All source code lives here
│   ├── app/
│   │   ├── globals.css                 # Styles and themes
│   │   ├── icon.ico                    # Favicon of the website
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets/
│   │   ├── logos/                      # Tool logos
│   │   ├── project-carousels/          # Project carousels
│   │   ├── project-thumbnails/         # Project card thumbnails
│   │   └── profile-picture.jpg         # Profile picture shown in the hero section
│   ├── components/
│   │   ├── sections/                   # Code of the 4 website sections
│   │   └── ui/                         # shadcn components
│   ├── lib/                            # Utilities, constants, hooks...
│   │   ├── constants.ts                # Global constants
│   │   └── utils.ts
│   ├── providers/                      # React Providers
│   │   └── ThemeProvider.tsx
│   └── types.ts                        # TypeScript types
├── components.json                     # shadcn config
├── eslint.config.mjs                   # ESLint config
├── README.md
```
