import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Video() {
    useGSAP(() => {
        console.log('ScrollTrigger animation initiated');
        gsap.fromTo(".video", 
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
        console.log('ScrollTrigger animation created');
    })
    

    return (
        <div className="videocontainer w-full bg-black flex items-start justify-center">
            <video className="video" autoPlay loop muted src="/videos/nike-ad.mp4"></video>
        </div>
    );
}

export default Video;
