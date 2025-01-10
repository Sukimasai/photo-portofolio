import { useEffect, useState } from 'react';
import KUTE from 'kute.js';
import './BackgroundBlob.css';

function BackgroundBlob() {
  const [blobHeight, setBlobHeight] = useState(window.innerHeight*1.8);
  const [blobWidth, setBlobWidth] = useState(window.innerWidth*1.8);
  const [blobY, setBlobY] = useState(window.innerWidth > 768 ? "-300 50 650 300" : "-300 350 650 300");
  useEffect(() => {
    const blobAnimation = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      {
        duration: 3000,
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          blobAnimation.start();
        },
      }
    );

    window.onload = () => {
      blobAnimation.start();
    };

    const handleResize = () => {
      setBlobHeight(window.innerHeight * 1.8);
      setBlobWidth(window.innerWidth * 1.8);
      setBlobY(window.innerWidth > 768 ? "-300 50 650 300" : "-300 350 650 300");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="blob">
      <svg className="blobSVG" viewBox={blobY} height={blobHeight} width={blobWidth}>
        <path
          id="blob1"
          d="M145.2 -130.1C195.2 -95.2 247.6 -47.6 242.8 -4.8C237.9 37.9 175.9 75.9 125.9 106.1C75.9 136.2 37.9 158.6 1.3 157.3C-35.4 156 -70.7 131 -104.7 100.9C-138.7 70.7 -171.4 35.4 -175.2 -3.9C-179.1 -43.1 -154.3 -86.3 -120.3 -121.1C-86.3 -155.9 -43.1 -182.5 2.2 -184.7C47.6 -186.9 95.2 -164.9 145.2 -130.1"
          fill="#606060"
        ></path>
        <path
          id="blob2"
          d="M128.4 -139.1C167.8 -89.1 201.9 -44.5 208.5 6.6C215.1 57.7 194.2 115.5 154.8 151.7C115.5 187.8 57.7 202.4 -2.4 204.8C-62.5 207.1 -124.9 197.3 -149.9 161.1C-174.9 124.9 -162.5 62.5 -153 9.4C-143.6 -43.6 -137.2 -87.2 -112.2 -137.2C-87.2 -187.2 -43.6 -243.6 0.5 -244.1C44.5 -244.5 89.1 -189.1 128.4 -139.1 "
          fill="#606060"
          style={{ visibility: 'hidden' }}
        ></path>
      </svg>
    </div>
  );
}

export default BackgroundBlob;
