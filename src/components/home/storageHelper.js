'use client';

export function getLocalStorage(key, defaultValue) {
    if (typeof window === 'undefined') return defaultValue; // Ensure compatibility with SSR

    try {
        const stickyValue = localStorage.getItem(key);
        return stickyValue !== null && stickyValue !== 'undefined'
            ? JSON.parse(stickyValue)
            : defaultValue;
    } catch (error) {
        console.error(`Error getting localStorage key "${key}":`, error);
        return defaultValue;
    }
}

export function setLocalStorage(key, value) {
    if (typeof window === 'undefined') return; // Ensure compatibility with SSR

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
    }
}