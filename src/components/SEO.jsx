import { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
    useEffect(() => {
        // Fallback defaults
        const defaultTitle = 'Aadarsha Dhakal | Infrastructure Engineer';
        const defaultDesc = 'Personal portfolio and technical blog of Aadarsha Dhakal, an Infrastructure Engineer specializing in highly scalable systems, cloud architecture, and modern web development.';
        const defaultKeywords = 'Aadarsha Dhakal, Infrastructure Engineer, Cloud Architect, Web Developer, Devops, Hashnode Blog, Portfolio';

        const finalTitle = title ? `${title} | Aadarsha Dhakal` : defaultTitle;
        const finalDesc = description || defaultDesc;
        const finalUrl = url || window.location.href;

        // Set page title
        document.title = finalTitle;

        // Helper to safely set meta tags
        const setMetaTag = (attrName, attrValue, content) => {
            let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attrName, attrValue);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Primary Meta Tags
        setMetaTag('name', 'description', finalDesc);
        setMetaTag('name', 'keywords', keywords || defaultKeywords);

        // Open Graph / Facebook
        setMetaTag('property', 'og:type', 'website');
        setMetaTag('property', 'og:url', finalUrl);
        setMetaTag('property', 'og:title', finalTitle);
        setMetaTag('property', 'og:description', finalDesc);
        if (image) setMetaTag('property', 'og:image', image);

        // Twitter
        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:url', finalUrl);
        setMetaTag('name', 'twitter:title', finalTitle);
        setMetaTag('name', 'twitter:description', finalDesc);
        if (image) setMetaTag('name', 'twitter:image', image);

        // Canonical Tag
        let canonical = document.querySelector(`link[rel="canonical"]`);
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', finalUrl);

    }, [title, description, keywords, image, url]);

    return null;
};

export default SEO;
