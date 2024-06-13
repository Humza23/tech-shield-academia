import React from 'react';
import Logo from '../assets/logo.png';  // Adjust the path based on your actual file location
import Form from '../Components/Form';

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <img src={Logo} alt="Tech Shield Academia Logo" className="w-64 h-auto" /> {/* Adjust width (w-64) as needed */}
      </div>
      <Form />
    </div>
  );
};

export default Home;
