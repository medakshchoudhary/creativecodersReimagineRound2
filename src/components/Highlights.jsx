import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  const highlight1ImgRef = useRef(null);
  const highlight2ImgRef = useRef(null);
  const highlight3ImgRef = useRef(null);
  const highlightsRef = useRef(null);
  const textRef = useRef(null);

  const splitText = () => {
    const highlightsElement = highlightsRef.current;
    if (highlightsElement) {
      const text = highlightsElement.textContent || "";
      const characters = text.split("");
      highlightsElement.innerHTML = characters
        .map((char) => `<span class="letter" style="display:inline-block; opacity:0">${char}</span>`)
        .join("");
    }
  };

  const animateHighlights = () => {
    const letters = document.querySelectorAll(".topheading .letter");
    if (letters.length === 0) {
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".topheading",
        start: "top 80%",
        end: "top 50%",
        scrub: 3,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.set(letters, { opacity: 1 }) // Ensure letters are visible
      .fromTo(
        letters,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: "Expo.easeInOut",
          duration: 2,
          stagger: 0.1,
        }
      );
  };

  useEffect(() => {
    splitText();
    animateHighlights();
  }, []);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        }
      }
    );

    tl.fromTo(
      ".highlights-container .highlight1",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".highlight1",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        }
      }
    );
    tl.fromTo(
      ".highlights-container .highlight2",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".highlight2",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        }
      }
    );
    tl.fromTo(
      ".highlights-container .highlight3",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".highlight3",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        }
      }
    );

    const handleMouseMove = (e) => {
      const images = [
        highlight1ImgRef.current,
        highlight2ImgRef.current,
        highlight3ImgRef.current
      ];

      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = centerX - mouseX;
        const deltaY = centerY - mouseY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        const moveX = (deltaX / distance) * 15;
        const moveY = (deltaY / distance) * 15;

        gsap.to(img, {
          x: moveX,
          y: moveY,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="highlights w-full h-fit bg-black flex flex-col text-white pt-12 md:px-20">
      <div className="topheading flex flex-col gap-3 items-center justify-center mb-20">
        <h1 ref={highlightsRef} className="text-5xl md:text-9xl uppercase">Highlights</h1>
        <h1 ref={textRef} className="text-md md:text-3xl opacity-0">Discover what matches with your personality</h1>
      </div>
      <div className="highlights-container">
        <div className="highlight1 w-full flex flex-col items-center md:justify-center md:flex-row md:mb-0 mb-8">
          <img ref={highlight1ImgRef} className="w-80 rounded-3xl md:mb-0 mb-4" src="/images/highlight1.png" alt="" />
          <div className="details md:pl-10 md:pr-0 flex flex-col md:justify-center px-10">
            <h1 className="text-4xl md:text-6xl font-bold">Embrace the Classic Comfort</h1>
            <p className="text-sm md:text-xl mt-12">Step into timeless style with our featured look of the day, showcasing the epitome of casual elegance. This ensemble features a sleek grey Nike sweatshirt paired with matching joggers, embodying both comfort and modern fashion. The clean lines and understated Nike logo make it a versatile addition to any wardrobe, perfect for lounging or making a statement on the streets. Complete the look with pristine white sneakers, adding a touch of fresh sophistication. Elevate your everyday style with this effortlessly cool outfit, blending simplicity and sportiness in perfect harmony.</p>
          </div>
        </div>
        <div className="highlight2 w-full flex flex-col items-center justify-center md:flex-row md:mb-0 mb-8">
            <div className="details md:pl-10 md:pr-0 flex flex-col md:justify-center px-10">
            <h1 className="text-4xl md:text-6xl font-bold">Effortless Elegance in Grey</h1>
            <p className="text-sm md:text-xl mt-12 md:mb-0 mb-4">Step into timeless style with our featured look of the day, showcasing the epitome of casual elegance. This ensemble features a sleek grey Nike sweatshirt paired with matching joggers, embodying both comfort and modern fashion. The clean lines and understated Nike logo make it a versatile addition to any wardrobe, perfect for lounging or making a statement on the streets. Complete the look with pristine white sneakers, adding a touch of fresh sophistication. Elevate your everyday style with this effortlessly cool outfit, blending simplicity and sportiness in perfect harmony.</p>
          </div>
          <img ref={highlight2ImgRef} className="w-80 rounded-3xl" src="/images/highlight2.png" alt="" />
        </div>
        <div className="highlight3 w-full flex flex-col items-center justify-center md:flex-row">
          <img ref={highlight3ImgRef} className="w-80 rounded-3xl md:mb-0 mb-4" src="/images/highlight3.png" alt="" />
          <div className="details md:pl-10 md:pr-0 flex flex-col md:justify-center px-10">
            <h1 className="text-4xl md:text-6xl font-bold">Dynamic Court Style</h1>
            <p className="text-sm md:text-xl mt-12">Dominate the court with our standout look of the day. This dynamic ensemble features a sleek black Nike long-sleeve shirt paired with matching athletic shorts, accented with bold yellow details. Perfect for peak performance, the lightweight, breathable fabric ensures comfort and agility. Complete the look with high-performance black sneakers for a sleek, sophisticated edge. Elevate your sportswear collection with this high-energy, stylish outfit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
