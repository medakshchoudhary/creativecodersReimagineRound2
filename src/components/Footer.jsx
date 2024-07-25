import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

function Footer() {
    const [path, setPath] = useState("M 0 100 Q 760 100 1520 100")
    const finalPath = "M 0 100 Q 760 100 1520 100"

    useEffect(() => {
        const string = document.querySelector('.string')

        string.addEventListener("mousemove", function(dets) {
            const newPath = `M 0 100 Q ${dets.clientX} ${dets.clientY} 1520 100`
            setPath(newPath)
            gsap.to("svg path", {
                attr: { d: newPath },
                duration: 0.3,
                ease: "power3.out",
            })
        })

        string.addEventListener("mouseleave", function() {
            setPath(finalPath)
            gsap.to("svg path", {
                attr: { d: finalPath },
                duration: 1.5,
                ease: "elastic.out(1,0.2)",
            })
        })
    }, [])

    return (
        <div className="footer w-full h-[100vh] bg-black flex felx-col">
            <div className="string bg-black w-full h-[200px] flex items-center justify-center">
                <svg width="100%" height="200">
                    <path d={path} stroke="white" strokeWidth="2" fill="transparent" />
                </svg>
            </div>
            <div className="creativecoders">

            </div>
        </div>
    )
}

export default Footer