import { useEffect, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options || { threshold: 0.1 });

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isVisible] as const;
};

export default useIntersectionObserver;
