import React from 'react'
import ThemePreview from './playground/ThemePreview'
import { MusicPlayer } from './components/MusicPlayer'
import './index.css'

function App() {
  return (
    <>
      <ThemePreview themeName="elegant" />
      <MusicPlayer 
        src="/audio/wedding-music.mp3" 
        title="Our Wedding Song" 
        artist="Romantic Melodies" 
      />
    </>
  )
}

export default App
