// components/TechStack.js
import React from 'react';

const TechStack = () => {
    // Dummy tech stack data
    const techStack = [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express', icon: 'fas fa-server' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Django', icon: 'fab fa-python' },
    ];

    return (
        <section className="py-16 bg-blue-900 text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Tech Stack</h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                    {techStack.map((tech) => (
                        <li key={tech.name} className="flex flex-col items-center animate__animated animate__slideInUp">
                            <i className={`text-4xl mb-2 ${tech.icon}`} />
                            <span className="text-xl font-semibold">{tech.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TechStack;
