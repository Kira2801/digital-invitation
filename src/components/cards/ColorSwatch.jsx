import React from 'react';

/**
 * ColorSwatch
 * -----------
 * Small circular color preview with a label, used in the Event Detail
 * section's "Dress Code" block.
 */
const ColorSwatch = ({ color, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-8 h-8 rounded-full" style={{ background: color, border: '1px solid rgba(255,255,255,0.15)' }} />
    <span className="text-xs opacity-70" style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.55rem' }}>
      {label}
    </span>
  </div>
);

export default ColorSwatch;
