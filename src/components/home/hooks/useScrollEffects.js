import { useState, useEffect } from 'react';

const useScrollEffects = (maxBlur = 10, blurRate = 80, opacityRate = 3000) => {
    const [blur, setBlur] = useState('blur(0px)');
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const newBlur = scrollY >= 800 ? `blur(${maxBlur}px)` : `blur(${scrollY / blurRate}px)`;
            const newOpacity = scrollY >= 800 ? 0 : 0.6 + scrollY / opacityRate;

            // Only update state if values have changed
            if (newBlur !== blur) setBlur(newBlur);
            if (newOpacity !== opacity) setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [blur, opacity, maxBlur, blurRate, opacityRate]);

    return { blur, opacity };
};

export default useScrollEffects;