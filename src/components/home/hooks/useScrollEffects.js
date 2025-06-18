import { useState, useEffect } from 'react';

const useScrollEffects = (maxBlur = 10, blurRate = 80, opacityRate = 3000) => {
    const [blur, setBlur] = useState('blur(0px)');
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 800) {
                setBlur(`blur(${maxBlur}px)`);
                setOpacity(0);
            } else {
                setBlur(`blur(${scrollY / blurRate}px)`);
                setOpacity(0.6 + scrollY / opacityRate);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [maxBlur, blurRate, opacityRate]);

    return { blur, opacity };
};

export default useScrollEffects;