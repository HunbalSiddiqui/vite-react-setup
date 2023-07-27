import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            React App With Vite
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
