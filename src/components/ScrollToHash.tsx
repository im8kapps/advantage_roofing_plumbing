import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(location.hash);
        if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return null;
}
