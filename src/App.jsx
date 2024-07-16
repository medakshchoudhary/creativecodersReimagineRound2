import React, { useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <div className="main w-full min-h-screen font-HelveticaNowTextMedium">
      <LoadingAnimation onComplete={handleLoadingComplete} />
      {isLoadingComplete && <Navbar />}
    </div>
  );
}

export default App;
