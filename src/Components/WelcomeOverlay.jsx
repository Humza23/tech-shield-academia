import React, { useEffect, useState } from 'react';

function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
        <h1 className="text-3xl text-cyan-400 animate-pulse">Welcome to Tech Shield Academia</h1>
      </div>
    )
  );
}

export default WelcomeOverlay;
