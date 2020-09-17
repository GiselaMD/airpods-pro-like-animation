/**
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [maxScrollTop, setMaxScrollTop] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);

  const onScroll = (e: any) => {
    setScrollTop(document.documentElement.scrollTop);
    setMaxScrollTop(document.documentElement.scrollHeight - window.innerHeight);
    setScrollFraction(scrollTop > 0 ? scrollTop / maxScrollTop : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    scrollFraction,
  };
};
