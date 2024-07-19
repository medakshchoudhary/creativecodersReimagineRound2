import React, { useState } from 'react';
import gsap from 'gsap';
import Showcase from './Showcase';
import ShoeCarousel from './ShoeCarousel';
import { useGSAP } from '@gsap/react';

function ShoeCarouselContainer() {
    // Initial shoe details
    const [selectedShoe, setSelectedShoe] = useState({
        src: "/images/shoes/nike_punk_retro.png",
        name: "Nike Punk Retro",
        price: "$400"
    });

    // Function to update selected shoe details
    const handleShoeClick = (shoe) => {
        setSelectedShoe(shoe);
    };

    return (
        <div>
            <Showcase selectedShoe={selectedShoe} />
            <ShoeCarousel onShoeClick={handleShoeClick} />
        </div>
    );
}

export default ShoeCarouselContainer;
