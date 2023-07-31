// components/Portfolio.js
import React from 'react';

const Portfolio = () => {
    // Dummy portfolio data
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A fully functional e-commerce website built with React and Node.js.',
            imageUrl: 'https://via.placeholder.com/400x200',
        },
        {
            id: 2,
            title: 'Data Visualization App',
            description: 'A data visualization app showcasing various algorithms.',
            imageUrl: 'https://via.placeholder.com/400x200',
        },
        // Add more projects as needed
    ];

    return (
        <section className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-blue-900 p-8 rounded-lg shadow-md animate__animated animate__fadeIn">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-6" />
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-lg mb-4">{project.description}</p>
                            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full text-lg">
                                View Project
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
