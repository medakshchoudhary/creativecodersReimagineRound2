import React from 'react';
import PropTypes from 'prop-types';

function Showcase({ selectedShoe }) {
    return (
        <div className="showcase w-full h-[55vh] px-12 flex mt-7">
            <div className="nike w-[56vw] h-full pt-4">
                <h1 className="text-[23vw] leading-none tracking-tighter">NIKE</h1>
            </div>
            <div className="shoe-display w-1/2 flex flex-col items-center justify-center mr-6">
                <div className="image h-1/2 w-full flex justify-end">
                    <img 
                        className="max-h-full max-w-full object-contain" 
                        src={selectedShoe.src} 
                        alt={selectedShoe.name} 
                    />
                </div>
                <div className="shoe-details h-1/3 w-full flex flex-col items-end justify-center">
                    <h1 className="shoe-name text-6xl">{selectedShoe.name}</h1>
                    <h1 className="shoe-price text-3xl">{selectedShoe.price}</h1>
                </div>
            </div>
        </div>
    );
}

Showcase.propTypes = {
    selectedShoe: PropTypes.object.isRequired,
};

export default Showcase;
