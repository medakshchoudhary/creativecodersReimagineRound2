import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Video() {
    useEffect(() => {
        gsap.fromTo(".videocontainer .video", 
            { width: "30vw" }, 
            {
                width: "100vw",
                scrollTrigger: {
                    trigger: ".video",
                    start: "top 50%",
                    end: "top 0%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, []);

    return (
        <div className="videocontainer w-full bg-black flex items-start justify-center">
            <video className="video" autoPlay loop muted src="/videos/nike-ad.mp4"></video>
        </div>
    );
}

export default Video;
