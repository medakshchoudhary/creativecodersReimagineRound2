import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

function LTR() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".LTR-banner",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
                markers: true, // For debugging, you can remove this later
            }
        });

        tl.to(".LTR-banner h1", {
            x: "-150%",
            ease: "none"
        });

        // Cleanup function to ensure GSAP and ScrollTrigger instances are killed on component unmount
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div className="LTR-banner w-full h-[100vh] bg-black px-10 whitespace-nowrap">
            <h1 className="text-[45vw] px-8 tracking-tighter leading-none text-white">WE ON AIR</h1>
        </div>
    );
}

export default LTR;
