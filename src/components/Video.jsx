import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Video() {
  useEffect(() => {
    gsap.fromTo(".video", 
      { width: "30vw" }, 
      {
        width: "100vw",
        scrollTrigger: {
          trigger: ".video",
          start: "top 50%", // Trigger starts when the top of the video hits 50% of the viewport height
          end: "top 0%",   // Trigger ends when the top of the video hits the top of the viewport
          scrub: 1,        // Smoothly animates the width with scrolling
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave, etc.
        }
      }
    );
  }, []);

  return (
    <div className="videocontainer w-full h-[25vh] md:h-[100vh] bg-black flex items-start justify-center overflow-hidden">
      <video className="video w-full" autoPlay loop muted src="/videos/nike-ad.mp4"></video>
    </div>
  );
}

export default Video;
