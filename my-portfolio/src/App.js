import React from 'react';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';
import './CSS/App.css';

function App() {
    return (
        <div className="App">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;