import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ModelViewer from "./ModelViewer";

function Footer() {
  const [path, setPath] = useState("M 0 130 Q 760 130 1520 130");
  const finalPath = "M 0 130 Q 760 130 1520 130";

  useEffect(() => {
    const handleMouseMove = function (event) {
      const { clientX, clientY } = event;
      const newPath = `M 0 130 Q ${clientX} ${clientY} 1520 130`;
      setPath(newPath);
      gsap.to("svg path", {
        attr: { d: newPath },
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = function () {
      setPath(finalPath);
      gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    const svg = document.querySelector(".svg");

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="footer w-full h-fit flex flex-col bg-black">
      <div className="string w-full h-fit">
        <svg className="svg hidden md:block w-full h-auto" width="130%" height="260">
          <path d={path} stroke="white" strokeWidth="2" fill="transparent" />
        </svg>
      </div>
      <div className="creativecoders w-full h-fit">
        <div className="container w-full h-[80vh] flex flex-col items-center justify-center">
          <div className="3dstore md:mt-0 mt-10">
            <h1 className="text-2xl md:text-7xl text-white font-extrabold uppercase">
              Introducing 3d store
            </h1>
          </div>
          <div className="3dmodelcontainer w-full h-full flex md:flex-row flex-col items-center justify-center">
            <ModelViewer
              alt="Supreme x Nike Air More Uptempo"
              src="/3dmodels/yellow_nike_dunk_low_dusty_olive_from_video_clip.glb"
              poster="/3dmodels/ImageToStl.com_yellow_nike_dunk_low_dusty_olive_from_video_clip.webp"
              shadowIntensity="1"
            />
            <ModelViewer
              alt="Nike Air Jordan"
              src="/3dmodels/nike_air_jordan.glb"
              poster="/3dmodels/ImageToStl.com_nike_air_jordan.webp"
              shadowIntensity="1"
            />
          </div>
          <div className="showmore">
            <a className="text-2xl bg-white text-black rounded-full py-2 px-5 font-extrabold uppercase">
              Show More
            </a>
          </div>
        </div>
      </div>
      <div className="end md:mt-0 mt-10 flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between md:px-16 py-4">
        <div className="credits ">
          <h1 className="text-white text-2xl md:text-3xl">Made by : CreativeCoders</h1>
        </div>
        <div className="coffee ">
          <h1 className="text-white text-2xl md:text-3xl">Buy Us Coffee☕</h1>
        </div>
        <div className="lastline md:mb-0 mb-5 h-fit text-white flex flex-col gap-1 items-start justify-between">
          <div className="wrapper flex gap-6">
            {["Contact Us", "@2024 NIKE"].map((item, index) => (
              <a className="text-2xl" key={index}>
                {item}
              </a>
            ))}
          </div>
          <div className="wrapper-2 flex gap-20">
            {["Shops", "Company"].map((item, index) => (
              <a className="text-2xl" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
