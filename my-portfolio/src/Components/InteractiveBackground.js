import React from 'react';
import Particles from 'react-particles';

const InteractiveBackground = () => {
  return (
    <Particles
      className="interactive-background"
      params={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
          line_linked: {
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default InteractiveBackground;
