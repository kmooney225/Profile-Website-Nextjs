import React, { useState, useEffect } from 'react';

const Background = ({ videoSrc }) => {
    const [opacity, setOpacity] = useState(1); // Start with full opacity
    const [blur, setBlur] = useState('blur(0px)'); // Start with no blur
    const [overlayOpacity, setOverlayOpacity] = useState(0); // Start with no black overlay
    const [videoLoaded, setVideoLoaded] = useState(false); // Lazy load video

    useEffect(() => {
        // Delay video loading for lazy load
        const timer = setTimeout(() => setVideoLoaded(true), 500); // Adjust delay as needed
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY === 0) {
                // Reset to clean state when at the top
                setBlur('blur(0px)');
                setOpacity(1);
                setOverlayOpacity(0); // No black overlay at the top
            } else if (scrollY >= 800) {
                // Fully visible state after scrolling past 800px
                setBlur('blur(10px)');
                setOpacity(0); // Fully fade out the video
                setOverlayOpacity(1); // Fully black overlay
            } else {
                // Gradually apply blur, opacity, and overlay while scrolling
                const calculatedBlur = scrollY / 80; // Adjust divisor for smoother blur
                const calculatedOpacity = 1 - scrollY / 800; // Gradually fade out the video
                const calculatedOverlayOpacity = scrollY / 800; // Gradually darken the overlay
                setBlur(`blur(${calculatedBlur}px)`);
                setOpacity(calculatedOpacity);
                setOverlayOpacity(calculatedOverlayOpacity);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[0]">
            {/* Video Background */}
            {videoLoaded && videoSrc && (
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: opacity, // Dynamic opacity
                        filter: blur, // Dynamic blur
                        transition: 'opacity 0.3s ease, filter 0.3s ease', // Smooth transitions
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}

            {/* Black Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full z-[1]"
                style={{
                    background: 'rgba(0, 0, 0, 1)', // Solid black background
                    opacity: overlayOpacity, // Dynamic overlay opacity
                    transition: 'opacity 0.3s ease', // Smooth transition for overlay
                    pointerEvents: 'none', // Ensure the overlay doesn't block interactions
                }}
            ></div>
        </div>
    );
};

export default Background;