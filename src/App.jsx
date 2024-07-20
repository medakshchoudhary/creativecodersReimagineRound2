import React, { useState } from 'react';
import Lenis from 'lenis'
import LoadingAnimation from './components/LoadingAnimation';
import Navbar from './components/Navbar';
import ShoeCarouselContainer from './components/ShoeCarouselContainer';
import Taglines from './components/Taglines';

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
      {isLoadingComplete && <Navbar />}
      {isLoadingComplete && <ShoeCarouselContainer /> }
      {isLoadingComplete && <Taglines />}
    </div>
  );
}

export default App;
