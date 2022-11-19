import React, { useState, useEffect } from 'react';

import { ReactComponent as Branch } from '../../assets/svgs/BranchSvg.svg';

const Service = () =>{

    const [opacity, setOpacity] = useState(0.8)
    const [blur, setBlur] = useState('blur(0px)')
    //botantical illustrations
    //mail chimp
    useEffect(()=>{
        const changeBlur = () => {
            if(window.scrollY >= 1600){
                setBlur('blur(' + 0 + 'px)')
                setOpacity(1)
            } else {
                setBlur('blur(' + window.scrollY/20 + 'px)')
                setOpacity( 0.80 + window.scrollY/3000)
            }
        }
        window.addEventListener('scroll', changeBlur);
    }, []);

    return(
        <div className='relative flex object-cover items-center justify-center h-screen bg-fixed bg-center bg-transparent z-[2]'>
                        <div 
            style={{
                opacity: opacity,
            }}
            className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'></div>
            <div 
            style={{
                backdropFilter: `${blur}`,
            }}
            className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]'></div>
            <div className='p-5 text-white z-[2]'>
                <h1 className='text-5xl font-bold text-pink-200'>Solution Architect</h1>
                <h2 className='p-10 text-3xl'>Meet Sinai Bebo</h2>
                <p className='ml-10'>As an event planner, Aidez Moi was born out of a passion for helping people 
                make their dreams come true. I make the most important events in my clients’ lives be as memorable 
                and enjoyable as possible. With 14 years in the events industry, planning a wedding, conference, 
                company parties, product launch, or business development are just a few of the events under my belt. 
                As the go between for your event, my professional, yet fun attitude, strategic partnerships formed 
                over the years, and zealous focus to the smallest details are what you need to make your next event 
                an unforgettable one! </p>
                <p className='ml-10'>Interested? Book a consultation with me! The initial appointment is free!</p>
                <button className='inline-block self-end bg-pink-600 text-white m-10 hover:bg-pink-400 ease-out duration-300 font-semibold hover:border-transparent rounded-lg px-6 py-2 uppercase text-sm'>Come Explore My Services</button>
            </div>
        </div>
    )
}

export default Service;