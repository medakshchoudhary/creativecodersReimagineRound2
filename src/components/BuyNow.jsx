import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BuyNow() {
    useEffect(() => {
        // Animate quotes
        gsap.fromTo(".buynow .quotes h1", 
            { y: 50, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".quotes",
                    start: "top 70%",
                    end: "top 60%",
                    stagger: 1,
                    scrub: 1,
                    toggleActions: "play reverse play reverse"
                }
            }
        );
        
        // Animate women element
        gsap.fromTo(".women", 
            { x: -100, opacity: 0 }, 
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".container",
                    start: "top 50%",
                    end: "top 10%",
                    stagger: 1,
                    scrub: 1,
                    toggleActions: "play reverse play reverse"
                }
            }
        );
        
        // Animate men element
        gsap.fromTo(".men", 
            { x: 100, opacity: 0 }, 
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".container",
                    start: "top 50%",
                    end: "top 10%",
                    stagger: 1,
                    scrub: 1,
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <div className="buynow font-HelveticaNowTextMedium pt-10">
            <div className="quotes flex flex-col items-center justify-center ">
                <h1 className="text-7xl uppercase font-bold">Play Your Part</h1>
                <h1 className="text-lg font-bold">Join us in being the best.</h1>
            </div>
            <div className="container flex gap-28 items-center justify-center p-10">
                <div className="women flex flex-col items-center relative">
                    <img className="shopnow-image w-96 rounded-3xl" src="/images/Rectangle 8.png" alt="" />
                    <div className="shopnow bg-black text-white absolute bottom-4 rounded-full flex items-center justify-center">
                        <h1 className="font-bold text-lg px-5 py-2 uppercase">Shop Now</h1>
                    </div>
                </div>
                <div className="men flex flex-col items-center relative">
                    <img className="shopnow-image w-96 rounded-3xl" src="/images/Rectangle 9.png" alt="" />
                    <div className="shopnow bg-white text-black absolute bottom-4 rounded-full flex items-center justify-center">
                        <h1 className="font-bold text-lg px-5 py-2 uppercase">Shop Now</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyNow;
