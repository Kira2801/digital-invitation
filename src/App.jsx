import React from 'react';
import themes, { getTheme } from './themes';
import invitationData from './mock/invitationData';
import './App.css';

/**
 * Active theme for production builds.
 * Change this single line to switch which template is deployed.
 * (During development, use the Playground instead — see `src/playground`.)
 */
const ACTIVE_THEME = 'elegant';

function App() {
  const ActiveTheme = getTheme(ACTIVE_THEME).component;
  return <ActiveTheme data={invitationData} />;
}

export default App;

// Re-exported for convenience (e.g. tests / playground)
export { themes, invitationData };
