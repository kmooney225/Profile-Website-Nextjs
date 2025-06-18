'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './storageHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        const storedConsent = getLocalStorage('cookie_consent', null);
        setCookieConsent(storedConsent);
    }, []);

    useEffect(() => {
        if (cookieConsent === null) return;

        const analyticsStorage = cookieConsent ? 'granted' : 'denied';
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', { analytics_storage: analyticsStorage });
        }

        setLocalStorage('cookie_consent', cookieConsent);
    }, [cookieConsent]);

    if (cookieConsent !== null) return null; // Hide banner if consent is already set

    return (
        <div className="z-10 my-4 mx-auto max-w-max md:max-w-screen-sm fixed bottom-2 left-2 right-2 flex px-2 md:px-3 py-2 justify-between items-center flex-col sm:flex-row gap-2 bg-gray-700 rounded-md shadow">
            <div className="text-center text-sm">
                <Link href="/info/cookies">
                    <p>
                        We use <span className="font-bold text-sky-400">cookies</span> on our site.
                    </p>
                </Link>
            </div>
            <div className="flex gap-2">
                <button
                    className="px-3 py-1 text-gray-300 rounded-md border-gray-900 text-sm"
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </button>
                <button
                    className="bg-gray-900 px-3 py-1 text-white rounded-md text-sm"
                    onClick={() => setCookieConsent(true)}
                >
                    Allow Cookies
                </button>
            </div>
        </div>
    );
}