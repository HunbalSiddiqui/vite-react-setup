// components/Intro.js
import React from 'react';

const Intro = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-blue-900 text-white">
            <div className="container mx-auto text-center animate__animated animate__fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
                <p className="text-lg md:text-xl mb-8">
                    I'm a passionate computer scientist with expertise in web development and software engineering.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg">
                    Hire Me
                </button>
            </div>
        </section>
    );
};

export default Intro;
