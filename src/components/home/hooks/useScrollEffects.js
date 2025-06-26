import { useState, useEffect } from 'react';

const useScrollEffects = (maxBlur = 10, blurRate = 80, opacityRate = 3000) => {
    const [blur, setBlur] = useState('blur(0px)');
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            const newBlur = scrollY >= 800 ? `blur(${maxBlur}px)` : `blur(${scrollY / blurRate}px)`;
            const newOpacity = scrollY >= 800 ? 0 : 0.6 + scrollY / opacityRate;

            // Only update state if values have changed
            if (newBlur !== blur) setBlur(newBlur);
            if (newOpacity !== opacity) setOpacity(newOpacity);
        };

        const throttledScroll = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                handleScroll();
                timeoutId = null;
            }, 100); // Adjust the delay as needed
        };

        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [blur, opacity, maxBlur, blurRate, opacityRate]);

    return { blur, opacity };
};

export default useScrollEffects;