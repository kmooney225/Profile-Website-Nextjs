import React, { useRef, useEffect } from 'react';

const LogosDisplay = () => {
  const containerRef = useRef(null);
  const logosRef = useRef(null);
  const logos = ['Hard Rock Cafe', 'Mariott', 'Stanley Market', 'BayFest'];
  let time = 0;
  let hoverSpeedModifier = 1;

  const handleMouseOverContainer = () => {
    hoverSpeedModifier = 0.5; // Slow down the movement
  };

  const handleMouseOutContainer = () => {
    hoverSpeedModifier = 1; // Restore the original speed
  };

  const handleMouseOverLogo = (e) => {
    e.target.style.fontSize = '5em'; // Enlarge the logo
    Array.from(logosRef.current.children).forEach((logo) => {
      if (logo !== e.target) {
        logo.style.fontSize = '1em'; // Minimize the other logos
      }
    });
  };

  const handleMouseOutLogo = () => {
    Array.from(logosRef.current.children).forEach((logo) => {
      logo.style.fontSize = '3em'; // Restore the original scale
    });
  };

  useEffect(() => {
    const logoElements = logosRef.current.children;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const radius = containerWidth * 0.15; // Adjusted radius for more spacing

    const animateLogos = () => {
      time += 0.008 * hoverSpeedModifier; // Slower movement

      Array.from(logoElements).forEach((logo, index) => {
        const t = time + index * 1.5;

        // Figure 8 movement
        const x = radius * Math.sin(t);
        const y = radius * Math.sin(t) * Math.cos(t); // Figure 8 pattern
        const z = 70 * Math.cos(t);

        logo.style.left = `50%`;
        logo.style.top = `50%`;
        logo.style.transform = `translate(-50%, -50%) translateZ(${z}px) translateX(${x}px) translateY(${y}px)`;
      });

      requestAnimationFrame(animateLogos);
    };

    animateLogos();
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: 'black', margin: '4px 0 4px 0', overflow: 'hidden', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white', fontFamily: 'Sacramento', fontSize: '4em', textAlign: 'center', margin: '20px 0' }}>
        Brands I Have Worked With
      </h1>
      <div
        ref={logosRef}
        onMouseOver={handleMouseOverContainer}
        onMouseOut={handleMouseOutContainer}
        style={{ position: 'relative', overflow: 'hidden', width: '100%', height: 'calc(100vh - 80px)', perspective: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            onMouseOver={handleMouseOverLogo}
            onMouseOut={handleMouseOutLogo}
            style={{ position: 'absolute', color: 'white', fontSize: '3em', textAlign: 'center', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', transition: 'font-size 0.5s ease' }}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosDisplay;

