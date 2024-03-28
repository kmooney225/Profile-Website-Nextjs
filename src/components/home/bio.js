import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Bio = () => {
    const [opacity, setOpacity] = useState(0.65);
    const [blur, setBlur] = useState('blur(0px)');

    const controls = useAnimation();

    useEffect(() => {
        const changeBlur = () => {
            if(window.scrollY >= 800){
                setBlur('blur(' + 0 + 'px)');
                setOpacity(1);
            } else {
                setBlur('blur(' + window.scrollY/20 + 'px)');
                setOpacity( 0.60 + window.scrollY/3000);
            }
        };
        window.addEventListener('scroll', changeBlur);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view.
        threshold: 0.1, // Percentage of the component's visibility to trigger 'inView'.  
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className='relative flex flex-col items-center justify-center h-full bg-fixed bg-center bg-transparent z-[2]'>
            <div 
                style={{ opacity: opacity }}
                className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'>
            </div>
            <div 
                style={{ backdropFilter: `${blur}` }}
                className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]'>
            </div>
            <div
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, transition: { duration: 1.5 } },
                    hidden: { opacity: 0 }
                }}
                className='z-[2] w-[80%] md:w-[55%] h-full m-16 p-8 rounded-lg text-white text-center md:text-left space-y-10'
                style={{
                    background: `linear-gradient(135deg, rgba(220, 38, 38, .9), rgba(236, 72, 153, 0.7))`
                }}>
                <h2 
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 120 }}
                    className='text-4xl md:text-6xl font-sacramento font-bold mb-4'>
                    My Bio
                </h2>
                <img 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
                    src={'./ProfilePic.jpg'} 
                    alt="Profile Picture" 
                    className='mx-auto w-full md:w-1/2 rounded-full shadow-lg my-4'/>
                <p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className='text-md md:text-lg leading-relaxed px-6 py-2'>
                    Welcome! As a passionate saxophone player based in Denver, Colorado, I've spent the past 15 years immersed in the world of music, bringing high-class entertainment to events and celebrations throughout the region. Alongside my musical pursuits, I have also delved into the tech industry as a software engineer, leveraging my expertise to build innovative and impactful services.
                    <br /> <br />
                    I firmly believe that contributing my talents of music and technology can yield remarkable results to your needs, and it's this belief that drives my endeavors here. Whether you are seeking the soulful melodies of a skilled saxophonist for your upscale event or interested in exploring cutting-edge tech solutions, you have come to the right place.
                    <br /> <br />
                    Curious about my work or have any questions? Do not hesitate to reach out! Drop me a message or schedule a chat via the contact page. I am Kevin Mooney, and I am eager to connect with you and bring a touch of musical sophistication or technological ingenuity to your world.
                </p>
            </div>
        </div>
    );
};

export default Bio;

