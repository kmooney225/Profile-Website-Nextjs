'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from './storageHelper'
import { useState, useEffect } from 'react';
import Script from "next/script";

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

export default function CookieBanner(){

    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        // Load Google Analytics script
        loadScript(`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, () => {
            // Script loaded callback
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

            // Set cookie consent if not already set
            const storedCookieConsent = getLocalStorage("cookie_consent", null);
            setCookieConsent(null);
        });
    }, []);
    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied';

        if (typeof window.gtag === 'function') {
            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        }

        setLocalStorage("cookie_consent", cookieConsent);

        // For Testing
        console.log("Cookie Consent: ", cookieConsent);
    }, [cookieConsent]);

    return (
        <div className={`z-10 my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow ${cookieConsent === null ? "flex" : "hidden"}`}>

            <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    id="analytics-tag"
                />

                <Script strategy="lazyOnload" id="analytics">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
            </Script>
            <div className='text-center'>
                <Link href="/info/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
            </div>

            
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>   
        </div>
    )}