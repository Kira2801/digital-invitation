import ElegantTheme from './elegant/Theme';

/**
 * themes/index.js — Theme Registry
 * =================================
 * Central registry of every available invitation template.
 *
 * To add a new template:
 *   1. Create `src/themes/<name>/Theme.jsx` (+ its `sections/` and `theme.css`)
 *   2. Import it below and add it to the `themes` map.
 *
 * That's it — it will automatically:
 *   - become selectable in the dev playground (`/src/playground/ThemePreview.jsx`)
 *   - become usable in production by setting `ACTIVE_THEME` in `src/App.jsx`
 *
 * Every theme component receives the SAME props: `{ data }` where `data`
 * is `invitationData` from `src/mock/invitationData.js`.
 */
const themes = {
  elegant: {
    name: 'Elegant',
    description: 'Gold & cream — classic, romantic, shimmering.',
    component: ElegantTheme,
  },

  // floral: { name: 'Floral', description: '...', component: FloralTheme },
  // horror: { name: 'Horror', description: '...', component: HorrorTheme },
};

export default themes;

export const getTheme = (key) => themes[key] ?? themes.elegant;
export const themeKeys = Object.keys(themes);
