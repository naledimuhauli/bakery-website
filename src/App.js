import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AboutUs from './AboutUs';
import Menu from './Menu';
import Navbar from './Navbar';
import About from './About';
import Products from './Products';


function Homepage() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <AboutUs />
        <Products />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
