import React, { useState } from 'react';
import themes from '../themes';
import invitationData from '../mock/invitationData';

/**
 * ThemePreview (Development Playground)
 * ======================================
 * Lets developers preview any registered theme/template with the shared
 * mock data, switchable via a dropdown — no backend required.
 *
 * Active automatically during `npm run dev` (see `src/main.jsx`).
 * Add new themes in `src/themes/index.js` and they appear here for free.
 */
const ThemePreview = () => {
  const themeKeys = Object.keys(themes);
  const [selected, setSelected] = useState(themeKeys[0]);

  const ActiveTheme = themes[selected].component;

  return (
    <div>
      {/* Dev toolbar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          background: 'rgba(15,8,6,0.95)',
          borderBottom: '1px solid rgba(212,136,13,0.3)',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '13px',
          color: '#f2d88e',
          backdropFilter: 'blur(8px)',
        }}
      >
        <span style={{ opacity: 0.6 }}>🎨 Theme:</span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          style={{
            background: '#1a0f0a',
            color: '#f2d88e',
            border: '1px solid rgba(212,136,13,0.4)',
            borderRadius: '6px',
            padding: '4px 8px',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          {themeKeys.map((key) => (
            <option key={key} value={key}>
              {themes[key].name} ({key})
            </option>
          ))}
        </select>
        <span style={{ opacity: 0.4, marginLeft: 'auto' }}>
          {themes[selected].description}
        </span>
      </div>

      {/* Spacer so the toolbar doesn't overlap the envelope/cover */}
      <div style={{ height: '40px' }} />

      {/* Selected theme, rendered with shared mock data */}
      <ActiveTheme key={selected} data={invitationData} />
    </div>
  );
};

export default ThemePreview;
