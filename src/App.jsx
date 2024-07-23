import React, { useState } from 'react';
import Lenis from 'lenis'
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import ShoeCarouselContainer from './components/ShoeCarouselContainer';
import Taglines from './components/Taglines';
import CustomCursorBall from './components/CustomCursorBall';
import BuyNow from './components/BuyNow';
import Highlights from './components/Highlights';

function App() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


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
      {isLoadingComplete && <Highlights />}
    </div>
  );
}

export default App;
