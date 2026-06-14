# Luxury Wedding Invitation

A pixel-perfect, responsive digital wedding invitation built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. This project replicates the elegant design and animations of high-end wedding websites.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (or navigate to the project folder):
    ```bash
    cd your-project-folder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to the URL shown in the terminal (usually `http://localhost:5173`).
    To test the guest name feature, append a query parameter:
    `http://localhost:5173/?to=Dhimas+Ramaditya+Harpanri`

---

## 🎨 How to Switch Themes

This project is architected to support multiple themes. Currently, the **Elegant** theme is active. To switch or preview different themes during development:

### Method 1: Using the Playground (Recommended for Dev)

The project includes a `ThemePreview` component designed for development purposes.

1.  Open `src/App.tsx`.
2.  Locate the main render logic.
3.  You can toggle between the **Live Site** and the **Playground** by modifying the import or conditional rendering.
    *   If there is a dedicated route or flag for the playground, enable it.
    *   Alternatively, temporarily replace the `<App />` component in `src/main.tsx` with `<ThemePreview />` to see all available themes in a grid layout.

### Method 2: Changing the Active Theme Manually

To change the theme for the entire application:

1.  Navigate to `src/themes/index.ts` (or the central theme configuration file).
2.  Look for the export or configuration object that selects the active theme.
    ```typescript
    // Example: src/themes/index.ts
    import { elegantTheme } from './elegant/Theme';
    // import { modernTheme } from './modern/Theme'; 

    export const activeTheme = elegantTheme; 
    // Change to: export const activeTheme = modernTheme;
    ```
3.  Save the file. The Vite dev server will hot-reload, and the new theme will be applied immediately.

### Adding a New Theme

To create a new theme:

1.  Create a new folder inside `src/themes/`, e.g., `src/themes/modern/`.
2.  Replicate the structure of the `elegant` folder:
    ```
    modern/
    ├── Theme.tsx       # Main layout wrapper
    └── sections/       # Theme-specific section overrides
        ├── Hero.tsx
        ├── Couple.tsx
        ...
    ```
3.  Define your unique styles, colors, and fonts in `Theme.tsx` using Tailwind classes or styled-components.
4.  Register the new theme in `src/themes/index.ts`.

---

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI components (Buttons, Modals, etc.)
│   ├── common/        # Generic components (MusicControl, ScrollReveal)
│   ├── sections/      # Section-specific components (Hero, Gallery, RSVP)
│   └── ...
├── data/              # Centralized content data (invitation.ts)
├── hooks/             # Custom React hooks (useAudio, useScroll, etc.)
├── themes/            # Theme definitions
│   ├── elegant/       # The current active theme
│   │   ├── Theme.tsx
│   │   └── sections/
│   └── index.ts       # Theme registry
├── App.tsx            # Main application entry
├── main.tsx           # DOM renderer
└── index.css          # Global styles & Tailwind directives
```

---

## 🛠️ Features

-   **Dynamic Guest Name:** Supports `?to=GuestName` URL parameter.
-   **Music Player:** Auto-play handling with user interaction requirement (browser policy).
-   **Animations:** Scroll-triggered animations using Framer Motion.
-   **Responsive:** Optimized for Mobile (320px+), Tablet, and Desktop.
-   **TypeSafe:** Built entirely with TypeScript.
-   **Data Driven:** All text, images, and dates are pulled from `src/data/invitation.ts`.

---

## 📝 Customization Guide

### Changing Content
Edit `src/data/invitation.ts`. This file contains all the text, image URLs, event details, and bank account information.

### Changing Colors/Fonts
Modify the `tailwind.config.js` file or the specific theme file (`src/themes/elegant/Theme.tsx`) to override default Tailwind theme extensions.

### Deploying
This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

1.  Run `npm run build`.
2.  Upload the contents of the `dist` folder to your host.

---

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
