import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Navbar() {

    useGSAP(()=>{

    })
  return (
    <div className="navbar w-full h-[100vh] px-8 py-4">
        <img className="w-16" src="/public/images/nike-black-logo.png" alt="" />
        <div className="menu-items">
            
        </div>
    </div>
  )
}

export default Navbar