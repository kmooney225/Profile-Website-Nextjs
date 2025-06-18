import React from 'react';

const BackgroundWeb = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[0]">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        </div>
    );
};

export default BackgroundWeb;
