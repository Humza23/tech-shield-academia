import React from 'react';
import Form from '../Components/Form';
import logoVideo from '../assets/logoVideo.mov'

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {/* Displaying the video */}
        <video autoPlay loop muted className="w-64 h-auto">
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Form />
    </div>
  );
};

export default Home;
