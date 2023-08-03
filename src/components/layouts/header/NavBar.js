import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [path, setPath] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const [boxShadow, setBoxShadow] = useState('0px')
    const router = useRouter();
//want to add additional animation whenever the navbar is pressed. I want the words to fade in and out softly and I want a white wave
    const handleNav = () => {
        setNav(!nav)
    }

    const handlePath = (e) => {
        setNav(false);
        if (router.pathname !== '/'){
            setColor('#ffffff')
            setTextColor('#000000')
            setBoxShadow('1px 2px 9px')
        }
        else {
            if(window.scrollY >= 600){
                setColor('#ffffff')
                setTextColor('#000000')
                setBoxShadow('1px 2px 9px')
            } else {
                setColor('transparent')
                setTextColor('#f2f2f2')
                setBoxShadow('0px 0px 0px')
            }
        }
    }

    useEffect(()=>{
        const changeColor = () => {

            if(router.pathname !=='/'){
                setColor('#ffffff')
                    setTextColor('#000000')
                    setBoxShadow('1px 2px 9px')
            }
            else {
                if(window.scrollY >= 600){
                    setColor('#ffffff')
                    setTextColor('#000000')
                    setBoxShadow('1px 2px 9px')
                } else {
                    setColor('transparent')
                    setTextColor('#f2f2f2')
                    setBoxShadow('0px 0px 0px')
                }
            }
        }
        
        window.addEventListener('scroll', changeColor);
    }, [router.pathname]);


    return (
        <div 
        style={{
            backgroundColor: `${color}`,
            boxShadow: `${boxShadow}`}}
        className="fixed left-0 w-full z-10 ease-in duration-300"
        >
            <div className="max-w-[1240] m-auto flex justify-between items-center p-4 text-white">
                <Link href='/'>
                    <h1 
                    style={{color: `${textColor}`}}
                    className='font-sacramento text-5xl'>
                        Kevin Mooney
                    </h1>
                </Link>
                <ul 
                style={{color: `${textColor}`}}
                className='hidden sm:flex '>
                    <li className={router.pathname === '/' ? 'p-4 text-white bg-red-500 hover:text-gray-200 rounded-md rounded-xl transition-all duration-200 ease-linear' : 'p-4 hover:text-gray-500 transition-all duration-200 ease-linear'}>
                        <Link onClick={handlePath}  href='/'>Bio</Link>
                    </li>
                    <li className={router.pathname === '/music' ? 'p-4 text-white bg-red-500 hover:text-gray-200 rounded-md rounded-xl transition-all duration-200 ease-linear' : 'p-4 hover:text-gray-500 transition-all duration-200 ease-linear'}>
                        <Link onClick={handlePath}  href='/music'>Music</Link>
                    </li>
                    <li className={router.pathname === '/webdev' ? 'p-4 text-white bg-red-500 hover:text-gray-200 rounded-md rounded-xl transition-all duration-200 ease-linear' : 'p-4 hover:text-gray-500 transition-all duration-200 ease-linear'}>
                        <Link onClick={handlePath}  href='/webdev'>Web Dev</Link>
                    </li>
                    <li className={router.pathname === '/contact' ? 'p-4 text-white bg-red-500 hover:text-gray-200 rounded-md rounded-xl transition-all duration-200 ease-linear' : 'p-4 hover:text-gray-500 transition-all duration-200 ease-linear'}>
                        <Link onClick={handlePath}  href='/contact'>Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav 
                    ? <AiOutlineClose size={20} style={{color: 'white'}}/> 
                    : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>
                    }
                </div>

                <div className={
                    nav
                    ? 'sm:hidden absolute top-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    : 'sm:hidden absolute top-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                    >
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={handleNav} href='/'>Bio</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={handleNav} href='/music'>Music</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={handleNav} href='/webdev'>Web Dev</Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link onClick={handleNav} href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;