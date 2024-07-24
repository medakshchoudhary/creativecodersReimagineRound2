import React, { useState } from 'react';
import Lenis from 'lenis';
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import ShoeCarouselContainer from './components/ShoeCarouselContainer';
import Taglines from './components/Taglines';
import CustomCursorBall from './components/CustomCursorBall';
import BuyNow from './components/BuyNow';
import Highlights from './components/Highlights';
import Video from './components/Video';
import LastTagline from './components/LastTagline';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };


  return (
    <div className="main w-full min-h-screen font-HelveticaNowTextMedium">
      <LoadingAnimation onComplete={handleLoadingComplete} />
      {isLoadingComplete && <CustomCursorBall/>}
      {isLoadingComplete && <Navbar />}
      {isLoadingComplete && <ShoeCarouselContainer /> }
      {isLoadingComplete && <Taglines />}
      {isLoadingComplete && <BuyNow />}
      {isLoadingComplete && <Video />}
      {isLoadingComplete && <Highlights />}
      {isLoadingComplete && <LastTagline />}
    </div>
  );
}

export default App;
