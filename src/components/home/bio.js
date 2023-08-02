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
                className='z-[2] w-[80%] md:w-[65%] h-full m-16 p-8 rounded-lg bg-gradient-to-r from-red-600 to-pink-500 text-white text-center md:text-left space-y-10'>
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
                    src={'./ProfilePic.JPG'} 
                    alt="Profile Picture" 
                    className='mx-auto w-full md:w-1/2 rounded-full shadow-lg my-4'/>
                <p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className='text-md md:text-lg leading-relaxed px-6 py-2'>
                    Welcome to my webpage, the harmonious intersection of technology and music. I have been lucky enough to spend the past 15 years of my life playing music on a variety of instruments, and I have had the privilege of doing so at many different events and celebrations.
                    <br /> <br />
                    I am also involved in the tech industry, using my passion and experience to build innovative and useful services. I believe that music and tech can come together to make something really special - and that is exactly what I am trying to do here.
                    <br /> <br />
                    If you are curious about what I do, or if you have any questions, don't hesitate to reach out! You can drop me a message or schedule a time to chat on the contact page. I cannot wait to hear from you!
                </p>
            </div>
        </div>
    );
};

export default Bio;

