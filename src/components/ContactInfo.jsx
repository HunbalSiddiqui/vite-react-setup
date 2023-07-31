// components/ContactInfo.js
import React from 'react';

const ContactInfo = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center animate__animated animate__fadeIn">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact Information</h2>
                <p className="text-lg md:text-xl mb-4">Email: your.email@example.com</p>
                <p className="text-lg md:text-xl">Phone: +1 (123) 456-7890</p>
            </div>
        </section>
    );
};

export default ContactInfo;
