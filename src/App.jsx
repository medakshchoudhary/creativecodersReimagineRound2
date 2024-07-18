import React, { useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import ShoeCarouselContainer from './components/ShoeCarouselContainer';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <div className="main w-full min-h-screen font-HelveticaNowTextMedium">
      <LoadingAnimation onComplete={handleLoadingComplete} />
      {isLoadingComplete && <Navbar />}
      {isLoadingComplete && <ShoeCarouselContainer />}
    </div>
  );
}

export default App;
