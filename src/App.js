import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Splash from './components/Splash';
import About from './components/About';

function App() {
  return (
    <div>
      <Splash />
      <About />
    </div>
  );
}

export default App;
