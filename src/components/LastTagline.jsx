import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LastTagline() {
    useEffect(() => {
        var tl = gsap.timeline();
        tl.fromTo(".taglinelast .heading1",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".heading1",
                    scroller: "body",
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse",
                }
            }
        );

        tl.fromTo(".taglinelast .heading2",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".heading2",
                    scroller: "body",
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1,
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, []);

    return (
        <div className="taglinelast w-full md:h-[70vh] h-[30vh] pb-5 bg-black flex items-center justify-center flex-col">
            <h1 className="heading1 text-[12vw] md:text-[10vw] font-extrabold uppercase text-[#DA0007] leading-none">Winning isn&apos;t</h1>
            <h1 className="heading2 text-[12vw] md:text-[10vw] font-extrabold uppercase text-[#DA0007] leading-none">for everyone</h1>
        </div>
    );
}

export default LastTagline;
