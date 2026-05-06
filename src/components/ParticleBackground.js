import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 70, density: { enable: true, area: 900 } },
          color: { value: '#39FF14' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.4,
            random: { enable: true, minimumValue: 0.1 },
            animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
          },
          size: {
            value: 2,
            random: { enable: true, minimumValue: 0.5 },
          },
          links: {
            enable: true,
            distance: 130,
            color: '#39FF14',
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
