import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ModelViewer from './ModelViewer'

function Footer() {
    const [path, setPath] = useState("M 0 130 Q 760 130 1520 130")
    const finalPath = "M 0 130 Q 760 130 1520 130"

    useEffect(() => {
        const handleMouseMove = function(event) {
            const { clientX, clientY } = event;
            const newPath = `M 0 130 Q ${clientX} ${clientY} 1520 130`
            setPath(newPath)
            gsap.to("svg path", {
                attr: { d: newPath },
                duration: 0.5,
                ease: "power3.out",
            })
        }

        const handleMouseLeave = function() {
            setPath(finalPath)
            gsap.to("svg path", {
                attr: { d: finalPath },
                duration: 1.5,
                ease: "elastic.out(1,0.2)",
            })
        }

        const svg = document.querySelector(".svg");

        svg.addEventListener("mousemove", handleMouseMove)
        svg.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            svg.removeEventListener("mousemove", handleMouseMove)
            svg.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <div className="footer w-full h-fit bg-black flex flex-col ">
            <div className="string w-full h-fit">
                <svg className="svg" width="130%" height="260">
                    <path d={path} stroke="white" strokeWidth="2" fill="transparent" />
                </svg>
            </div>
            <div className="creativecoders w-full h-fit">
                <div className="container w-full h-[90vh] flex flex-col items-center justify-center">
                    <div className="3dstore">
                        <h1 className="text-7xl text-white p-8 font-extrabold uppercase">Sneak Peak of " 3D STORE "</h1>
                    </div>
                    <div className="3dmodelcontainer w-full h-full flex items-center justify-center">

                    <div className="shoeconatiner w-full h-full border-solid border-2">

                    <ModelViewer
                        alt="Supreme x Nike Air More Uptempo"
                        src="/3dmodels/yellow_nike_dunk_low_dusty_olive_from_video_clip.glb"
                        poster="/3dmodels/ImageToStl.com_yellow_nike_dunk_low_dusty_olive_from_video_clip.webp"
                        shadowIntensity="1"
                        />
                        </div>
                        <div className="shirtconatiner w-full h-full border-solid border-2">

                    <ModelViewer
                        alt="Supreme x Nike Air More Uptempo"
                        src="/public/3dmodels/polo nike - t-shirt .glb"
                        poster="/public/3dmodels/polo nike - t-shirt .glb"
                        shadowIntensity="1"
                        />
                        </div>
                        </div>
                </div>
            </div>
            <div className="lastline w-full h-fit text-white flex items-center justify-between py-4 px-12">
                {["Contact Us","@2024 NIKE","Shops","Company"].map((item,index)=>(
                    <a className="text-2xl font-bold tracking-wider" key={index}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Footer