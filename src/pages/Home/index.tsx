import React, { useEffect, useState, useRef } from 'react';

import { Container, CanvasWrapper, Canvas } from './styles';

import { useScroll } from '../../hooks/useScroll';
import { FRAME_COUNT, IMG_PATH, initialFrame } from './utils';

const Home: React.FC = () => {
  const initialImg = new Image();
  initialImg.src = initialFrame;

  const [frameIndex, setFrameIndex] = useState(0);
  const { scrollFraction } = useScroll();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const allImages = Array.from(
      new Array(FRAME_COUNT),
      (_, i) => `${IMG_PATH}${i.toString().padStart(4, '0')}.jpg`
    );
    allImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext('2d');
      canvas.width = 1158;
      canvas.height = 770;
      let ctx = canvasCtxRef.current;
      ctx!.drawImage(initialImg, 0, 0);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const updateImage = (index: Number) => {
      let newImg = new Image();
      newImg.src = `${IMG_PATH}${index.toString().padStart(4, '0')}.jpg`;
      canvasCtxRef.current!.drawImage(newImg, 0, 0);
    };

    updateImage(frameIndex);
  }, [frameIndex]);

  useEffect(() => {
    setFrameIndex(
      Math.min(FRAME_COUNT - 1, Math.ceil(scrollFraction * FRAME_COUNT))
    );
  }, [scrollFraction]);

  return (
    <Container>
      <CanvasWrapper>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasWrapper>
    </Container>
  );
};

export default Home;
