import React from "react";
import ImageSlider from "../ImageSlider";
import chicken from "../svg/chicken.jpg";
import plantain from "../svg/plantain.jpg";
import semo from "../svg/semo.jpg";


const DishGrid = () => {
    const slides = [
        { url: `${chicken}`, title: "Chicken"},
        { url: `${plantain}`, title: "plantain"},
        { url: `${semo}`, title: "semo"},
    ];

    return (
        <main id="products" className="pt-8 px-8">
            <header className='text-center'>
                <h1 className='font-bold text-3xl md:text-5xl text-homely-red'>Our Daily Dishes</h1>
                <p className='text-lg md:text-2xl font-normal text-homely-black'>Check out recommended dishes of your choice.</p>
            </header>
            <div className="w-full md:w-[500px] h-[300px] mx-auto mt-8">
                <ImageSlider slides={slides} />
            </div>
        </main>
    );
};

export default DishGrid;