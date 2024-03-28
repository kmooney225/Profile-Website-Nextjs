import React, { useState, useEffect } from 'react';

const Hero = () =>{

    const [opacity, setOpacity] = useState(0.65)
    const [blur, setBlur] = useState('blur(0px)')
    //botantical illustrations
    //mail chimp
    useEffect(()=>{
        const changeBlur = () => {
            if(window.scrollY >= 800){
                setBlur('blur(' + 0 + 'px)')
                setOpacity(1)
            } else {
                setBlur('blur(' + window.scrollY/20 + 'px)')
                setOpacity( 0.60 + window.scrollY/3000)
            }
        }
        window.addEventListener('scroll', changeBlur);
    }, []);

    return(
<div 
  className='relative flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[urlOfYourImage]'>
    <div 
    style={{
        opacity: opacity,
    }}
    className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'>
    </div>
    <div 
    style={{
        backdropFilter: `${blur}`,
    }}
    className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]'>
    </div>
        <div className='flex-column items-center justify-center p-5 text-white z-[2]'>
            <h1 className='text-6xl md:text-8xl text-center font-sacramento'>
            Kevin Mooney
            </h1>
            <h2 className='text-xl md:text-2xl flex mt-20 text-center'>
                The High-Class, Colorado based, Sax Player and Software Engineer.
            </h2>
        </div>
        
</div>

    )
}

export default Hero;