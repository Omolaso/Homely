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
        <main id="products" className="mt-8 px-8">
            <header>
                <h1>Our Daily Dishes</h1>
                <p>Check Out recommended dishes of your choice.</p>
            </header>
            <div className="w-full md:w-[500px] h-[300px] mx-auto">
                <ImageSlider slides={slides} />
            </div>
        </main>
    );
};

export default DishGrid;