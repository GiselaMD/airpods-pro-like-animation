/**
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from 'react';
const FRAME_COUNT = 148;
export function useScroll() {
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [bodyOffset, setBodyOffset] = useState(
  //   document.body.getBoundingClientRect()
  // );
  // const [scrollY, setScrollY] = useState(bodyOffset.top);
  // const [scrollX, setScrollX] = useState(bodyOffset.left);
  // const [scrollDirection, setScrollDirection] = useState<string>('down');

  const [scrollTop, setScrollTop] = useState(0);
  const [maxScrollTop, setMaxScrollTop] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);

  const onScroll = (e: any) => {
    // setBodyOffset(document.body.getBoundingClientRect());
    // setScrollY(-bodyOffset.top);
    // setScrollX(bodyOffset.left);
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    // setLastScrollTop(-bodyOffset.top);
    setScrollTop(document.documentElement.scrollTop);
    setMaxScrollTop(document.documentElement.scrollHeight - window.innerHeight);
    setScrollFraction(scrollTop / maxScrollTop);
    setFrameIndex(
      Math.min(FRAME_COUNT - 1, Math.ceil(scrollFraction * FRAME_COUNT))
    );
    console.log('frameIndex', frameIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    frameIndex,
  };
}
