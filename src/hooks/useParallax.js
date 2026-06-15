import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook for 3D parallax depth effect based on device orientation or mouse movement
 */
export function useParallax(sensitivity = 15) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });

    const lerp = (start, end, factor) => start + (end - start) * factor;

    useEffect(() => {
        const animate = () => {
            currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.08);
            currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.08);

            setTilt({
                x: currentRef.current.x,
                y: currentRef.current.y,
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        // Device orientation for mobile
        const handleOrientation = (event) => {
            const { beta, gamma } = event;
            if (beta !== null && gamma !== null) {
                targetRef.current.x = Math.max(-sensitivity, Math.min(sensitivity, (gamma / 45) * sensitivity));
                targetRef.current.y = Math.max(-sensitivity, Math.min(sensitivity, ((beta - 40) / 45) * sensitivity));
            }
        };

        // Mouse for desktop
        const handleMouse = (event) => {
            const { clientX, clientY } = event;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            targetRef.current.x = ((clientX - centerX) / centerX) * sensitivity;
            targetRef.current.y = -((clientY - centerY) / centerY) * sensitivity;
        };

        // Request permission for iOS
        const requestPermission = async() => {
            if (
                typeof DeviceOrientationEvent !== 'undefined' &&
                typeof DeviceOrientationEvent.requestPermission === 'function'
            ) {
                try {
                    const permission = await DeviceOrientationEvent.requestPermission();
                    if (permission === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                } catch (err) {
                    window.addEventListener('mousemove', handleMouse);
                }
            } else {
                window.addEventListener('deviceorientation', handleOrientation);
                window.addEventListener('mousemove', handleMouse);
            }
        };

        requestPermission();
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('deviceorientation', handleOrientation);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, [sensitivity]);

    return tilt;
}

/**
 * Hook to track scroll position for scroll-based parallax
 */
export function useScrollParallax() {
    const [scrollY, setScrollY] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return scrollY;
}

/**
 * Hook for intersection observer - fade in when element enters viewport
 */
export function useInView(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(element);
                }
            }, { threshold: 0.15, ...options }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

/**
 * Hook for countdown timer
 */
export function useCountdown(targetDate) {
    const calculateTimeLeft = useCallback(() => {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return timeLeft;
}