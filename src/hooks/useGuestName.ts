import { useState, useEffect } from 'react';

export const useGuestName = () => {
  const [guestName, setGuestName] = useState<string>('Valued Guest');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    
    if (toParam) {
      // Decode and format the guest name
      const decodedName = decodeURIComponent(toParam.replace(/\+/g, ' '));
      setGuestName(decodedName);
    }
  }, []);

  return guestName;
};

export default useGuestName;
