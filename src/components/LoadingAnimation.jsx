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
        tl.add([
            gsap.to(".start-text h1", {
                duration: 1.5,
                y: -100,
                scrub: 3,
                ease: "Expo.easeInOut"
            }),
            gsap.to(".nike-white-logo", {
                duration: 1.5,
                y: -100,
                scrub: 5,
                ease: "Expo.easeInOut"
            })
        ]);
        tl.to(".loader1",{
            height:0,
            duration:2.25,
            delay:-1,
            ease: "Expo.easeInOut",
        })
        tl.to(".loader2",{
            height:"100vh",
            duration:2.25,
            delay:-3,
            ease: "Expo.easeInOut",
        })
        tl.to(".loader3",{
            height:"100vh",
            duration:2.25,
            delay:-2.8,
            ease: "Expo.easeInOut",
        })
        
    })
  return (
    <div className="min-h-screen w-full">
        <div className="loader1 h-[100vh] w-full font-HelveticaNowTextMedium text-white bg-black flex flex-col items-center justify-start">
            <div className="heading flex items-center justify-center mt-8 gap-2 overflow-hidden">
                <img className="nike-white-logo w-12" src="/images/nike-white-logo.jpeg" alt="" />
            </div>
            <div className="start-text flex justify-center items-center gap-5 mt-56 overflow-hidden">
                {["JUST","DO","IT."].map((item,index)=>{
                    return (
                        <h1 key={index} className="text-5xl tracking-wider leading-none">{item}</h1>         
                    )
                })}
            </div>
            <div className="loader2 absolute w-full bottom-0 bg-[#9e9ea0]"></div>
            <div className="loader3 absolute w-full bottom-0 bg-white"></div>
        </div>
    </div>
  )
}

export default LoadingAnimation