import React from 'react';
import { themes } from '../themes';
import { invitationData } from '../mock/invitationData';

const ThemePreview = ({ themeName = 'elegant' }) => {
  const theme = themes[themeName];
  
  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Theme Not Found</h2>
          <p className="text-gray-600">The theme "{themeName}" does not exist.</p>
        </div>
      </div>
    );
  }

  const { Hero, Couple, Gallery, Event, RSVP } = theme.components;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero couple={invitationData.couple} guestName="Valued Guest" />
      
      {/* Couple Section */}
      <Couple couple={invitationData.couple} />
      
      {/* Gallery Section */}
      <Gallery images={invitationData.gallery} />
      
      {/* Event Section */}
      <Event event={invitationData.event} />
      
      {/* RSVP Section */}
      <RSVP rsvpData={invitationData.rsvp} />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-amber-50 to-pink-50 text-center">
        <p className="text-gray-600">
          Made with ❤️ for {invitationData.couple.bride.name.split(' ')[0]} & {invitationData.couple.groom.name.split(' ')[0]}
        </p>
      </footer>
    </div>
  );
};

export default ThemePreview;
