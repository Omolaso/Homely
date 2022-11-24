import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    useEffect(() =>{
        // goToNext();
    })

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        // transition: "all 2s ease-in-out 0.08s",
        transition: "all 1s ease-in-out",
    }

    return(
        <div className='h-full relative'>
            <div className='absolute top-[40%] right-4 z-10'>
                <FontAwesomeIcon 
                    icon={faChevronRight}
                    className="text-2xl md:text-5xl cursor-pointer"
                    onClick={goToNext}
                />
            </div>
            <div className='absolute top-[40%] left-4 z-10'>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-2xl md:text-5xl cursor-pointer"
                    onClick={goToPrevious}
                />
            </div>
            <div style={slideStyles}></div>
        </div>
    )
}

export default ImageSlider
