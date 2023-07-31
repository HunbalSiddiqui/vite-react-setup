// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-4 bg-blue-900 text-white text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
