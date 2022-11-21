import React from 'react';
// import { EasyOrder, DeliveryMan, TopFoodIcon, FoodIcon } from "../svg"

const ServiceGrid = () => {
  return (
    <main className='my-12'>
        <header className='text-center'>
            <h1 className='font-bold text-2xl md:text-5xl text-homely-red'>Why choose us?</h1>
            <p className='text-lg md:text-2xl font-normal text-homely-black'>This is what makes our product different.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 items-center bg-homely-background-peach h-full md:h-[545px] mt-4 px-4 md:py-0 py-8 gap-4">
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                {/* <EasyOrder/>      */}
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>Easy to order</h2>
                    <p className='font-normal text-base md:text-xl'> Order food at a single click and select all food to order at any point 
                        in time and at ease and comfort
                    </p>
                </article>
            </div>
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                {/* <DeliveryMan/>      */}
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>Easy to order</h2>
                    <p className='font-normal text-base md:text-xl'> Order food at a single click and select all food to order at any point 
                        in time and at ease and comfort
                    </p>
                </article>
            </div>
            <div className='flex flex-col items-center justify-around bg-homely-background-white h-[430px] px-4'>
                {/* <TopFoodIcon/>      */}
                <article className='h-[145px] text-center'>
                    <h2 className='font-bold text-xl md:text-3xl'>Easy to order</h2>
                    <p className='font-normal text-base md:text-xl'> Order food at a single click and select all food to order at any point 
                        in time and at ease and comfort
                    </p>
                </article>
            </div>

            
        </section>
    </main>
  )
}

export default ServiceGrid