import React, { useEffect, useState, useRef } from 'react';

import { Container, CanvasWrapper, Canvas } from './styles';

import { useScroll } from '../../hooks/useScroll';
import { FRAME_COUNT, IMG_PATH, initialFrame } from './utils';

const Home: React.FC = () => {
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

  const drawImage = (image: HTMLImageElement) => {
    canvasCtxRef.current!.drawImage(image, 0, 0);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext('2d');
      canvas.width = 1158;
      canvas.height = 770;

      const initialImg = new Image();
      initialImg.src = initialFrame;
      initialImg.onload = () => drawImage(initialImg);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const updateImage = (index: Number) => {
      const newImg = new Image();
      newImg.src = `${IMG_PATH}${index.toString().padStart(4, '0')}.jpg`;
      newImg.onload = () => drawImage(newImg);
    };

    updateImage(frameIndex);
  }, [frameIndex]);

  useEffect(() => {
    const newFrameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.ceil(scrollFraction * FRAME_COUNT)
    );
    setFrameIndex(newFrameIndex);
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
