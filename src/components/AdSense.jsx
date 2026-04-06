import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdSense = () => {
    const location = useLocation();
    const disallowedPaths = ['/unsubscribe'];

    useEffect(() => {
        const isDisallowed = disallowedPaths.some(path => location.pathname === path);

        if (isDisallowed) {
            // If the route is disallowed, we shouldn't have the script.
            // But if it's already there, AdSense might still show ads.
            // In a SPA, Auto-ads are tricky.
            return;
        }

        const scriptId = 'adsense-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2840991057266725";
            script.async = true;
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);
        }
    }, [location]);

    return null;
};

export default AdSense;
