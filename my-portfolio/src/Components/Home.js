import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import '../CSS/Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* <InteractiveBackground /> */}
      <div className="home-content">
        <h2>Bonjour, je suis</h2>
        <h1>Gabriel de Taxis du Poët</h1>
        <h2>Développeur passionné</h2>
        <p>Spécialisé en C, C++, React Native, ReactJS, NodeJS, MongoDB.</p>
      </div>
    </div>
  );
};

export default Home;
