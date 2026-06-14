import { useState, useEffect, useRef } from 'react';

interface UseAudioReturn {
  isPlaying: boolean;
  isMuted: boolean;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
}

export const useAudio = (src: string): UseAudioReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { isPlaying, isMuted, play, pause, toggle };
};

export default useAudio;
