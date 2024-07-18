import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

function LTR() {

    useGSAP(()=>{
        gsap.to(".LTR-banner h1", {
            transform: "translateX(-150%)",
            scrollTrigger: {
                trigger: ".LTR-banner",
                start: "top 0%",
                end: "top -100%",
                scrub: 3,
                pin:true,
                markers: true,
            }
        })
    })

  return (
    <div className="LTR-banner w-full bg-red-500 flex items-center whitespace-nowrap leading-none overflow-hidden">
        <h1 className="text-[46vw] leading-none w-full">WE ON AIR</h1> 
    </div>
  )
}

export default LTR