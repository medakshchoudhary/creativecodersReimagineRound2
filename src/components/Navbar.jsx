import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useGSAP(() => {
        var tl = gsap.timeline();

        tl.from(".logo-image", {
            y: -50,
            opacity: 0,
            ease: "ease-in-out",
        });
        tl.from(".menu-items", {
            y: -50,
            opacity: 0,
            ease: "ease-in-out",
            stagger: 0.1,
        });
        tl.from(".side-menu-container", {
            y: -50,
            opacity: 0,
            ease: "ease-in-out",
            stagger: 0.1,
        });
    }, []);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(".hamburger-menu", {
                x: 0,
                duration: 0.5,
                ease: "ease-in-out",
            });
        } else {
            gsap.to(".hamburger-menu", {
                x: "100%",
                duration: 0.5,
                ease: "ease-in-out",
            });
        }
    }, [menuOpen]);

    return (
        <div className="navbar w-full pl-8 pr-8 py-4 flex items-center justify-between">
            <img className="logo-image w-16" src="/images/nike-black-logo.png" alt="Nike logo" />
            <div className="hidden lg:flex menu-items-container flex gap-5">
                {["New & Featured", "Men", "Women", "Kids", "Customize", "SNKRS"].map((item, index) => (
                    <a className="menu-items text-lg" key={index}>{item}</a>
                ))}
            </div>
            <div className="flex gap-1">
                <div className="search-bar w-full flex items-center justify-start pr-2 bg-[#f5f5f5] rounded-full">
                    <div className="image-container w-8 h-8 mr-1 flex items-center justify-center hover:bg-[#CACACB] rounded-full">
                        <img className="w-6" src="/images/search-icon.png" alt="Search icon" />
                    </div>
                    <input className="w-32 outline-none bg-[#f5f5f5] text-sm" type="text" placeholder="Search Store" />
                </div>
                <div className="hidden lg:flex other-usermenu-items gap-1">
                    <img className="profile w-6" src="/images/profile.svg" alt="Profile icon" />
                    <img className="cart w-8" src="/images/cart.png" alt="Cart icon" />
                </div>
                <button className="lg:hidden flex flex-col items-center justify-center gap-1 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`h-1 w-6 bg-black transition-all ${menuOpen ? "transform rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`h-1 w-6 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
                    <div className={`h-1 w-6 bg-black transition-all ${menuOpen ? "transform -rotate-45 -translate-y-2" : ""}`}></div>
                </button>
            </div>
            <div className={`lg:hidden hamburger-menu fixed top-0 right-0 h-full bg-white w-4/5 transform translate-x-full shadow-lg p-8 ${menuOpen ? "z-50" : ""}`}>
                <div className="flex flex-col gap-5 mt-10">
                    {["New & Featured", "Men", "Women", "Kids", "Customize", "SNKRS"].map((item, index) => (
                        <a className="menu-items text-lg" key={index}>{item}</a>
                    ))}
                </div>
                <button className="absolute top-4 right-4 text-2xl" onClick={() => setMenuOpen(false)}>✕</button>
            </div>
        </div>
    );
}

export default Navbar;
