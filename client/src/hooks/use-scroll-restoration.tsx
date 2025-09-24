import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const useScrollRestoration = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);
};