import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function CustomCursorBall() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="customcursorball pointer-events-none z-50 hidden lg:block" ref={cursorRef}></div>
  );
}

export default CustomCursorBall;
