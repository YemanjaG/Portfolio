import React from 'react';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './CSS/App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;