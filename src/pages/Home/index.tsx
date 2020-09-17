import React, { useEffect, useState, useRef } from 'react';
import { useScroll } from '../../hooks/useScroll';

import { Container, PageId, CanvasWrapper, Canvas } from './styles';
const FRAME_COUNT = 148;
const IMG_PATH =
  'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/';

const Home: React.FC = () => {
  const initialFrame = `${IMG_PATH}0001.jpg`;
  const initialImg = new Image();
  initialImg.src = initialFrame;
  const { frameIndex } = useScroll();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize
    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${IMG_PATH}${i.toString().padStart(4, '0')}.jpg`;
      console.log('img', img);
    }
  }, []);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      canvasRef.current.width = 1158;
      canvasRef.current.height = 770;
      let ctx = canvasCtxRef.current;
      ctx!.drawImage(initialImg, 0, 0);
    }
  }, []);

  useEffect(() => {
    const updateImage = (index: Number) => {
      const newImg = new Image();
      newImg.src = `${IMG_PATH}${index.toString().padStart(4, '0')}.jpg`;
      canvasCtxRef.current!.drawImage(newImg, 0, 0);
    };
    updateImage(frameIndex);
    console.log('frameIndex', frameIndex);
  }, [frameIndex]);

  return (
    <Container>
      <PageId>AirPods Pro like Animation!</PageId>
      <CanvasWrapper>
        <Canvas ref={canvasRef}></Canvas>
      </CanvasWrapper>
    </Container>
  );
};

export default Home;
