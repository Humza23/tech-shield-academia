// import React from 'react';
// import Form from '../Components/Form';
// import logoVideo from '../assets/logoVideo.mov'

// const Home = () => {
//   return (
//     <div className="p-4">
//       <div className="flex justify-center mb-4">
//         {/* Displaying the video */}
//         <video autoPlay loop muted className="w-64 h-auto">
//           <source src={logoVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <Form />
//     </div>
//   );
// };

// export default Home;
import React, { useRef, useEffect } from 'react';
import Form from '../Components/Form';
import logoVideo from '../assets/logoVideo.mov'; // Adjust the path based on your actual file location

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video) {
        video.play().catch(error => {
          // Autoplay was prevented
          console.error('Autoplay was prevented:', error);
        });
      }
    };

    const handleInteraction = () => {
      if (video) {
        video.removeEventListener('canplay', playVideo);
        video.removeEventListener('touchstart', handleInteraction);
        video.removeEventListener('mousedown', handleInteraction);
      }
    };

    if (video) {
      video.addEventListener('canplay', playVideo);
      video.addEventListener('touchstart', handleInteraction);
      video.addEventListener('mousedown', handleInteraction);
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', playVideo);
        video.removeEventListener('touchstart', handleInteraction);
        video.removeEventListener('mousedown', handleInteraction);
      }
    };
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {/* Displaying the video */}
        <video ref={videoRef} autoPlay loop muted className="w-64 h-auto">
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Form />
    </div>
  );
};

export default Home;
