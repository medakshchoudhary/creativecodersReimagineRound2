import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Navbar() {

    useGSAP(()=>{
        var tl = gsap.timeline();

        tl.from(".logo-image",{
            y:-30,
            opacity:0,
            duration:1,
            delay:4
        })
    })
  return (
    <div className="navbar w-full pl-8 pr-12 py-4 flex items-center justify-between">
        <img className="logo-image w-16" src="/public/images/nike-black-logo.png" alt="" />
        <div className="menu-items flex gap-5">
            {["New & Featured","Men","Women","Kids","Customize","SNKRS"].map((item,index)=>{
                return (
                    <a key={index}>{item}</a>
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
                <a className="flex gap-1" href="">
                    <img className="w-6" src="/public/images/profile.svg" alt="" />
                    <img className="w-8" src="/public/images/cart.png" alt="" />

                </a>
        </div>
    </div>
  )
}

export default Navbar