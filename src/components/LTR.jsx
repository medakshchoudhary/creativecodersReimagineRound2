import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LTR = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const animation = gsap.to(".LTR-banner h1", {
                x: "-150%",
                scrollTrigger: {
                    trigger: ".LTR-banner",
                    scroller: "body",
                    start: "top top",
                    end: "top -150%",
                    scrub: 2,
                    pin: true,
                    pinSpacing: true,
                    // markers: true, // Uncomment for debugging
                }
            });

            return () => {
                // Clean up the animation and ScrollTrigger instances when the component unmounts
                if (animation.scrollTrigger) {
                    animation.scrollTrigger.kill();
                }
                animation.kill();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="LTR-banner w-full bg-red-500 flex items-center whitespace-nowrap leading-none overflow-hidden">
            <h1 className="text-[100vh] leading-none w-full">WE ON AIR</h1>
        </div>
    );
};

export default LTR;
