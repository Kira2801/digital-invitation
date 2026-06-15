import { useEffect, useState } from 'react';

/**
 * useInvitationFlow
 * ------------------
 * Encapsulates the generic "digital invitation" UX flow shared by (almost)
 * every template:
 *
 *  1. `envelope` → fullscreen envelope opener is shown, scroll locked
 *  2. `cover`    → cover/hero is shown, scroll still locked
 *  3. `open`     → scroll unlocked, nav dots + music player appear,
 *                  active section is tracked via IntersectionObserver
 *
 * Each theme stays responsible for *how* each phase looks (Envelope, Hero,
 * sections, etc.) — this hook only owns the *behavior*, so it can be reused
 * by every template instead of being re-implemented per theme.
 *
 * @param {string[]} sectionIds - ordered list of section element IDs used
 *                                 for the in-page navigation / scrollspy.
 */
export function useInvitationFlow(sectionIds = []) {
  const [phase, setPhase] = useState('envelope'); // envelope -> cover -> open
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  // ── Parse nama tamu dari URL: ?to=NamaTamu ───────────────────────────────
  const guestName = (() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get('to');
      return raw ? decodeURIComponent(raw) : '';
    } catch {
      return '';
    }
  })();

  // ── Kunci / buka scroll pada <body> ──────────────────────────────────────
  // #root punya overflow:hidden di CSS, jadi scroll sebenarnya ada di <html>/<body>.
  // Kunci keduanya sekaligus agar tidak bisa scroll sama sekali.
  useEffect(() => {
    const locked = phase !== 'open';
    const els = [document.documentElement, document.body];
    els.forEach((el) => {
      el.style.overflow = locked ? 'hidden' : '';
    });
    return () => els.forEach((el) => { el.style.overflow = ''; });
  }, [phase]);

  // ── Intersection observer untuk nav dots (aktif setelah scroll dibuka) ──
  useEffect(() => {
    if (phase !== 'open') return;

    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [phase, sectionIds]);

  // Amplop selesai → tampilkan cover (scroll masih terkunci)
  const handleEnvelopeComplete = () => setPhase('cover');

  // Tombol ↓ ditekan → buka scroll & langsung scroll ke section kedua
  const handleCoverOpen = () => {
    setPhase('open');
    const target = sectionIds[1];
    if (!target) return;
    // Tunggu satu frame agar overflow: '' sudah diterapkan browser
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  return {
    phase,
    guestName,
    activeSection,
    handleEnvelopeComplete,
    handleCoverOpen,
  };
}
