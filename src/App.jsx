import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarBanner from './Components/NavbarBanner';
import NavbarCollapsible from './Components/NavbarCollapsible';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import MeetTheTeam from './Pages/MeetTheTeam';
import ContactUs from './Pages/ContactUs';
import CourseDetails from './Pages/CourseDetails';

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
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
