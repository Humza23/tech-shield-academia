import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarBanner from './Components/NavbarBanner';
import NavbarCollapsible from './Components/NavbarCollapsible';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Mission from './Pages/Mission';
import ContactUs from './Pages/ContactUs';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <NavbarBanner toggleNavbar={toggleNavbar} />
        <NavbarCollapsible isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
