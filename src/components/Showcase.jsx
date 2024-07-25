import React from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { useGSAP } from '@gsap/react';

function Showcase({ selectedShoe }) {

    useGSAP(()=>{
        var tl = gsap.timeline();
        tl.add([
            gsap.from(".nike",{
                x:"-100%",
                opacity: 0,
                ease: "Expo.easeInOut",
                duration:2,
                delay:1.5
            }),
            gsap.from(".shoe-display",{
                x:"100%",
                opacity: 0,
                ease: "Expo.easeInOut",
                duration:2,
                delay:1.5
            }),
        ]);
    })
    return (
        <div className="showcase w-full h-[55vh] md:px-12 md:flex mt-7">
            <div className="nike md:w-[56vw] w-full h-fit overflow-hidden">
                <h1 className="md:text-[23vw] text-[46vw] leading-none tracking-tighter">NIKE</h1>
            </div>
            <div className="shoe-display md:w-fit w-full flex flex-col items-center justify-center mr-6">
                <div className="image h-1/2 md:w-full w-[80vw] flex justify-end">
                    <img 
                        className="md:max-h-full w-full object-contain" 
                        src={selectedShoe.src} 
                        alt={selectedShoe.name} 
                    />
                </div>
                <div className="shoe-details md:p-0 px-10 h-1/3 w-full flex flex-col items-end justify-center">
                    <h1 className="shoe-name text-4xl md:text-6xl">{selectedShoe.name}</h1>
                    <h1 className="shoe-price text-2xl md:text-3xl">{selectedShoe.price}</h1>
                </div>
            </div>
        </div>
    );
}

Showcase.propTypes = {
    selectedShoe: PropTypes.object.isRequired,
};

export default Showcase;
