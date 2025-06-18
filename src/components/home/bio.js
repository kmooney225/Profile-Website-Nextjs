import React from 'react';
import useScrollEffects from './hooks/useScrollEffects';
import Image from 'next/image'; // Import Next.js Image component

const Bio = () => {
    const { blur, opacity } = useScrollEffects(); // Use the shared hook

    return (
        <div className="relative flex flex-col items-center justify-center h-full bg-fixed bg-center bg-transparent z-[2]">
            {/* Black Overlay */}
            <div
                style={{ opacity: opacity }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]"
            ></div>

            {/* Blur Effect */}
            <div
                style={{ backdropFilter: blur }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]"
            ></div>

            {/* Content Section */}
            <div
                className="z-[2] w-[80%] md:w-[55%] h-full m-16 p-8 rounded-lg text-white text-center md:text-left space-y-10"
                style={{
                    background: `linear-gradient(135deg, rgba(220, 38, 38, .9), rgba(236, 72, 153, 0.7))`,
                }}
            >
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-sacramento font-bold mb-4">
                    My Bio
                </h2>

                {/* Profile Picture */}
                <div className="mx-auto w-full md:w-1/2 rounded-full my-4">
                    <Image
                        src="/ProfilePic.jpg" // Replace with your image path
                        alt="Profile Picture"
                        width={300} // Specify width
                        height={300} // Specify height
                        className="rounded-full" // Ensure the image remains circular
                    />
                </div>

                {/* Description */}
                <p className="text-md md:text-lg leading-relaxed px-6 py-2">
                    Welcome! As a passionate saxophone player based in Denver, Colorado, I have spent
                    the past 15 years immersed in the world of music, bringing high-class
                    entertainment to events and celebrations throughout the region. Alongside my
                    musical pursuits, I have also delved into the tech industry as a software
                    engineer, leveraging my expertise to build innovative and impactful services.
                    <br /> <br />
                    I firmly believe that contributing my talents of music and technology can yield
                    remarkable results to your needs, and it is this belief that drives my endeavors
                    here. Whether you are seeking the soulful melodies of a skilled saxophonist for
                    your upscale event or interested in exploring cutting-edge tech solutions, you
                    have come to the right place.
                    <br /> <br />
                    Curious about my work or have any questions? Do not hesitate to reach out! Drop
                    me a message or schedule a chat via the contact page. I am Kevin Mooney, and I
                    am eager to connect with you and bring a touch of musical sophistication or
                    technological ingenuity to your world.
                </p>
            </div>
        </div>
    );
};

export default Bio;

