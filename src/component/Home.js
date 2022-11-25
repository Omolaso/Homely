import React from "react";
// import { FoodIcon } from "../svg";
import foodIcon from "../svg/food-icon.svg";


const Home = () => {
    return (
        <main className="flex flex-col px-8">
            <section className="flex flex-row items-center justify-between">
                <div className="flex flex-col ">
                    <article className="text-center md:text-left w-full md:w-[483px]">
                        <h2 className="font-medium text-3xl md:text-5xl leading-[38px] md:leading-[62px] w-full md:w-[483px]"> Enjoy <span className="text-homely-red"> home made meals </span>far away from home. </h2>
                        <p className="text-lg md:text-2xl font-normal leading-6 md:leading-8 mt-2">Helping you enjoy comfortable and healthy food anywhere and anytime on the go.</p>
                    </article>

                    <div className="mt-3 self-center md:self-start">
                        <button className="bg-homely-red text-homely-white p-[10px] rounded-lg ">
                            Order now
                        </button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src={foodIcon} alt="food-icon" className="w-[483px] h-[483px]" />
                </div>
            </section>

            <section className="self-center mt-8 grid grid-cols-3 text-center">
                <div className="flex flex-col">
                    <h2 className="font-bold text-homely-black text-2xl md:text-3xl">500+</h2>
                    <p className="text-sm font-bold text-homely-grey">Food Partners</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-homely-black text-2xl md:text-3xl">1K+</h2>
                    <p className="text-sm font-bold text-homely-grey">Orders delivered</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-homely-black text-2xl md:text-3xl">12k+</h2>
                    <p className="text-sm font-bold text-homely-grey">Clients</p>
                </div>
            </section>
        </main>
    )
}

export default Home