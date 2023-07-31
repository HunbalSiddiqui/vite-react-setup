import { createRoot } from "react-dom/client";
import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Intro />
            <Portfolio />
            <TechStack />
            <ContactInfo />
            <Footer />
        </>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
