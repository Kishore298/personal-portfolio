import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dot) {
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
      }
      if (ring) {
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
      }
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactables = document.querySelectorAll('a, button, .glass-card, input, textarea');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} />
    </>
  );
};

export default CustomCursor;
