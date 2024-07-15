import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Navbar() {

    useGSAP(()=>{
        var tl = gsap.timeline();

        tl.from(".logo-image",{
            y:-100,
            opacity:0,
            duration:1,
            delay:5,
            ease: "ease-in-out",
            scrub:5,
        })
        tl.from(".menu-items",{
            y:-100,
            opacity:0,
            ease: "ease-in-out",
            stagger:0.1,
            scrub: 5,
        })
        tl.from(".side-menu-continer",{
            y:-100,
            opacity:0,
            ease: "ease-in-out",
            stagger:0.2,
            scrub: 5,
        })
    })
  return (
    <div className="navbar w-full pl-8 pr-12 py-4 flex items-center justify-between">
        <img className="logo-image w-16" src="/public/images/nike-black-logo.png" alt="" />
        <div className="menu-items-container flex gap-5">
            {["New & Featured","Men","Women","Kids","Customize","SNKRS"].map((item,index)=>{
                return (
                    <a className="menu-items" key={index}>{item}</a>
                )
            })}
        </div>
        <div className="side-menu-continer flex gap-1">
                <div className="search-bar w-full flex items-center justify-center pr-2 bg-[#f5f5f5] rounded-full">
                    <div className="image-container w-8 h-8 mr-1 flex items-center justify-center hover:bg-[#CACACB] rounded-full">
                        <img className="w-6" src="/public/images/search-icon.png" alt="" />
                    </div>
                    <input className="w-20 outline-none bg-[#f5f5f5] text-sm" type="text" />
                </div>
                <a className="other-usermenu-items flex gap-1" href="">
                    <img className="profile w-6" src="/public/images/profile.svg" alt="" />
                    <img className="cart w-8" src="/public/images/cart.png" alt="" />
                </a>
        </div>
    </div>
  )
}

export default Navbar