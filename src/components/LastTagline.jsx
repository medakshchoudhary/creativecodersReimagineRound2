// import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'
import gsap from 'gsap'

function LastTagline() {
    useEffect(()=>{
        gsap.from(".taglinelast .colon1",{
            y:-70,
            x:-70,
            scrollTrigger:{
                trigger:".colon1",
                scroller:"body",
                start:"top 55%",
                end:"top 45%",
                scrub:4,
            }
        })
        
        gsap.from(".colon2",{
            y:70,
            x:70,
            scrollTrigger:{
                trigger:".colon1",
                scroller:"body",
                start:"top 55%",
                end:"top 45%",
                scrub:4,
            }
        })
    }, []);
  return (
    <div className="taglinelast w-full h-[100vh] relative overflow-hidden bg-black flex items-center justify-center">
        <img className="colon1 w-16 absolute top-[20%] left-[10%]" src="/public/svgs/quote-left.svg" alt="" />
        <h1 className="text-[10vw] font-extrabold uppercase text-[#DA0007] flex flex-col items-center justify-center leading-none"><span>Wining isn't</span> <span> for everyone</span></h1>
        <img className="colon2 w-16 absolute bottom-[20%] right-[5%]" src="/public/svgs/quote-right.svg" alt="" />
    </div>
  )
}

export default LastTagline