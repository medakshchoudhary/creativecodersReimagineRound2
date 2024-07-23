import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

function Highlights() {
  useGSAP(()=>{
    gsap.to
  })
  return (
    <div className="highlights w-full bg-black flex flex-col text-white p-20">
      <div className="highlight1 w-full flex mb-16">
        <img className="w-80 rounded-3xl" src="/public/images/highlight1.png" alt="" />
        <div className="details pl-10 flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Embrace the Classic Comfort</h1>
          <p className="text-xl mt-12">Step into timeless style with our featured look of the day, showcasing the epitome of casual elegance. This ensemble features a sleek grey Nike sweatshirt paired with matching joggers, embodying both comfort and modern fashion. The clean lines and understated Nike logo make it a versatile addition to any wardrobe, perfect for lounging or making a statement on the streets. Complete the look with pristine white sneakers, adding a touch of fresh sophistication. Elevate your everyday style with this effortlessly cool outfit, blending simplicity and sportiness in perfect harmony.</p>
        </div>
      </div>
      <div className="highlight2 w-full flex mt-10 mb-16">
        <div className="details pr-10 flex flex-col justify-center">
          <h1 className="text-6xl font-bold">Effortless Elegance in Grey</h1>
          <p className="text-xl mt-12">Step into timeless style with our featured look of the day, showcasing the epitome of casual elegance. This ensemble features a sleek grey Nike sweatshirt paired with matching joggers, embodying both comfort and modern fashion. The clean lines and understated Nike logo make it a versatile addition to any wardrobe, perfect for lounging or making a statement on the streets. Complete the look with pristine white sneakers, adding a touch of fresh sophistication. Elevate your everyday style with this effortlessly cool outfit, blending simplicity and sportiness in perfect harmony.</p>
        </div>
      <img className="w-80 rounded-3xl" src="/public/images/highlight2.png" alt="" />
      </div>
      <div className="highlight3 w-full flex mt-10">
      <img className="w-80 rounded-3xl" src="/public/images/highlight3.png" alt="" />
        <div className="details pl-10 flex flex-col justify-center">
          <h1 className="text-6xl font-bold"> Dynamic Court Style</h1>
          <p className="text-xl mt-12">Dominate the court with our standout look of the day. This dynamic ensemble features a sleek black Nike long-sleeve shirt paired with matching athletic shorts, accented with bold yellow details. Perfect for peak performance, the lightweight, breathable fabric ensures comfort and agility. Complete the look with high-performance black sneakers for a sleek, sophisticated edge. Elevate your sportswear collection with this high-energy, stylish outfit.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Highlights