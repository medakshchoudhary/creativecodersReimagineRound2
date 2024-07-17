import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';

const shoeDetails = [
    { src: "/images/shoes/nike_punk_retro.png", name: "Nike Punk Retro", price: "$400" },
    { src: "/images/shoes/air_max_dn.png", name: "Air Max DN", price: "$200" },
    { src: "/images/shoes/air_max_1.png", name: "Air Max 1", price: "$150" },
    { src: "/images/shoes/jordan_air_max.png", name: "Jordan Air Max", price: "$130" },
    { src: "/images/shoes/jordan_stay_loyal.png", name: "Jordan Stay Loyal", price: "$140" },
    { src: "/images/shoes/nike_air_force.png", name: "Nike Air Force", price: "$120" },
    { src: "/images/shoes/v2k_run_shoes.png", name: "V2K Run Shoes", price: "$440" },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ShoeCarousel({ onShoeClick }) {
    return (
        <Carousel
            className="h-[28vh]"
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            draggable={false}
            arrows={true}
        >
            {shoeDetails.map((shoe, index) => (
                <div key={index} className="flex justify-center items-center mr-10">
                    <div 
                        className="carousel-item w-full h-[25vh] border-solid border-4 rounded-3xl flex items-center gap-5" 
                        onClick={() => onShoeClick(shoe)}
                    >
                        <div className="image-container w-full h-full p-5 flex items-center justify-center">
                            <img 
                                src={shoe.src} 
                                alt={shoe.name} 
                                className="object-contain max-w-full max-h-full"
                            />
                        </div>
                        <div className="shoe-info flex flex-col items-end whitespace-nowrap mr-4">
                            <h2 className="shoe-name text-xl font-bold">{shoe.name}</h2>
                            <h3 className="shoe-price text-lg">{shoe.price}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

ShoeCarousel.propTypes = {
    onShoeClick: PropTypes.func.isRequired
};

export default ShoeCarousel;
