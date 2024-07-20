import React, { useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import LandingPage from './components/LandingPage';
import Taglines from './components/Taglines';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <div className="main w-full min-h-screen font-HelveticaNowTextMedium">
      <LoadingAnimation onComplete={handleLoadingComplete} />
      {isLoadingComplete && <LandingPage />}
      {isLoadingComplete && <Taglines />}
    </div>
  );
}

export default App;
