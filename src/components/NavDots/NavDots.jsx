import React from 'react';

/**
 * NavDots
 * -------
 * Fixed in-page navigation dots with hover tooltips + scrollspy highlight.
 * Visuals identical to the original — `sections` (id/label pairs) is now
 * provided by the active theme so every template can define its own list
 * of sections.
 *
 * @param {{id: string, label: string}[]} sections
 * @param {string} activeSection - id of the currently active section
 */
const NavDots = ({ sections, activeSection }) => (
  <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5">
    {sections.map((section) => {
      const isActive = activeSection === section.id;
      return (
        <button
          key={section.id}
          onClick={() => {
            const el = document.getElementById(section.id);
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative flex items-center justify-end"
          title={section.label}
        >
          {/* Label tooltip */}
          <span
            className="absolute right-5 whitespace-nowrap text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: 'rgba(26,15,10,0.9)',
              border: '1px solid rgba(212,136,13,0.25)',
              color: '#f2d88e',
              fontFamily: "'Jost', sans-serif",
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              transition: 'opacity 0.2s ease',
              backdropFilter: 'blur(8px)',
            }}
          >
            {section.label}
          </span>

          {/* Dot */}
          <div
            style={{
              width: isActive ? '8px' : '5px',
              height: isActive ? '8px' : '5px',
              borderRadius: '50%',
              background: isActive
                ? 'linear-gradient(135deg, #e4a924, #d4880d)'
                : 'rgba(212,136,13,0.3)',
              border: isActive ? '1px solid rgba(228,169,36,0.6)' : '1px solid rgba(212,136,13,0.2)',
              boxShadow: isActive ? '0 0 8px rgba(212,136,13,0.5)' : 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
          />
        </button>
      );
    })}
  </div>
);

export default NavDots;
