import React from 'react';
import useScrollEffects from './hooks/useScrollEffects';

const Hero = () => {
    const { blur, opacity } = useScrollEffects(); // Use the shared hook

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover">
            {/* Black Overlay */}
            <div
                style={{ opacity: opacity === 1 ? 0.6 : opacity }} // Ensure max opacity is 0.6
                className="absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]"
            ></div>

            {/* Blur Effect */}
            <div
                style={{ backdropFilter: blur }} // Use the blur value directly
                className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]"
            ></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center p-5 text-white z-[2]">
                <h1 className="text-6xl md:text-8xl text-center font-sacramento">
                    Kevin Mooney
                </h1>
                <h2 className="text-lg md:text-3xl flex mt-20 text-center">
                    The High-Class, Colorado based, Sax Player and Software Engineer.
                </h2>
            </div>
        </div>
    );
};

export default Hero;