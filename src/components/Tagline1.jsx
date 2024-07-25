import React from 'react';

function Tagline1() {
    return (
        <div className="Tagline1-banner w-full md:h-[20vw] h-[60vw] bg-[url('/images/weonair.jpg')] bg-cover bg-center flex items-center justify-center">
            <h1 className="tagline text-white text-[16vw] md:text-[12vw] flex gap-4 md:gap-16">
                <span>
                    <span className="span">W</span><span className="span">IN</span>
                </span>
                <span>
                    <span className="span">O</span><span className="span">N</span>
                </span>
                <span>
                    <span className="span">A</span><span className="span">IR</span>
                </span>
            </h1>
        </div>
    );
}

export default Tagline1;
