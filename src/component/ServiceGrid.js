import React from 'react';
// import { EasyOrder, DeliveryMan, TopFoodIcon } from "../svg"
import easyOrder from "../svg/easy-order.svg";
import deliveryMan from "../svg/delivery-man.svg";
import topFoodIcon from "../svg/top-food-icon.svg";

const ServiceGrid = () => {
  return (
    <main className='pt-8'>
        <header className='text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-homely-red'>Why choose us?</h1>
            <p className='text-lg md:text-2xl font-normal text-homely-black'>This is what makes our product different.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 items-center bg-homely-background-peach h-full md:h-[545px] mt-4 px-4 md:py-0 py-8 gap-4">
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                <img src={easyOrder} alt='easy-order'/>
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>Easy To Order</h2>
                    <p className='font-normal text-base md:text-xl'> Order food at a single click and select all food to order at any point 
                        in time and at ease and comfort.
                    </p>
                </article>
            </div>
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                <img src={deliveryMan} alt='delivery'/>  
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>Fast Delivery</h2>
                    <p className='font-normal text-base md:text-xl'> Fast and reliable delivery to any location at any time and any day.</p>
                </article>
            </div>
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                <img src={topFoodIcon} alt='top-food'/>
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>100% Quality</h2>
                    <p className='font-normal text-base md:text-xl'> We provide quality food for you and your loved ones for health and
                        wellness.
                    </p>
                </article>
            </div>
        </section>
    </main>
  )
}

export default ServiceGrid