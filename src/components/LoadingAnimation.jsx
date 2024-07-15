import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function LoadingAnimation() {

    useGSAP(()=>{
        var tl = gsap.timeline();

        tl.from(".nike-white-logo",{
            opacity: 0,
            duration: 1,
            delay:0.5,
            y: -100,
        })
        
        tl.from(".start-text h1",{
            opacity: 0,
            duration: 1,
            x: 60,
            stagger: 0.2,
            scrub: 3,
        })
    })
  return (
    <div className="main-loader h-[100vh] w-full font-HelveticaNowTextMedium text-white bg-black flex flex-col items-center justify-start">
        <div className="heading flex items-center justify-center mt-8 gap-2">
            <img className="nike-white-logo w-12" src="/images/nike-white-logo.jpeg" alt="" />
        </div>
        <div className="start-text flex justify-center items-center gap-5 mt-56">
            {["JUST","DO","IT."].map((item,index)=>{
                return (
                        <h1 key={index} className="text-5xl tracking-wider leading-none">{item}</h1>         
                    )
                })}
        </div>
    </div>
  )
}

export default LoadingAnimation