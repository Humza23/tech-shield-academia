import React, { useRef, useEffect } from 'react';
import Form from '../Components/Form';
import logoVideo from '../assets/logoVideo.mov'; // Adjust the path based on your actual file location

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleInteraction = () => {
      if (video && video.paused) {
        video.play().catch(error => {
          console.error('Autoplay was prevented:', error);
        });
      }
    };

    if (video) {
      video.addEventListener('touchstart', handleInteraction);
      video.addEventListener('mousedown', handleInteraction);
    }

    return () => {
      if (video) {
        video.removeEventListener('touchstart', handleInteraction);
        video.removeEventListener('mousedown', handleInteraction);
      }
    };
  }, []); // Only run once on component mount

  return (
    <div className="relative">
      {/* Video container */}
      <div className="flex justify-center mb-4">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-64 h-auto" controls={false}>
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center text-xs italic" style={{ fontSize: '0.6rem' }}>
  Empowering careers through IT Audit & Cybersecurity education
</div>


      {/* Content below the video */}
      <div className="p-4">
        <Form />
      </div>
    </div>
  );
};

export default Home;
