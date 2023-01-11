import React, { useState, useEffect } from 'react';

const Hero = () =>{

    const [opacity, setOpacity] = useState(0.65)
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
                setOpacity( 0.65 + window.scrollY/3000)
            }
        }
        window.addEventListener('scroll', changeBlur);
    }, []);

    return(
        <div 
        className='flex items-center justify-center h-screen object-cover bg-fixed bg-center bg-cover'>
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
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-5xl font-bold'>Kevin Mooney</h1>
                {/* <h2 className='text-2xl p-8'>Developing beautiful websites and creating beautiful music</h2> */}
            </div>
        </div>
    )
}

export default Hero;