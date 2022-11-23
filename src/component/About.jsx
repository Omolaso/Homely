import React from 'react';
import food from "../svg/about-food.svg";

const About = () => {
  return (
    <main id='about' className='flex flex-row items-center justify-between px-8 mt-8'>
      <section className='flex flex-col flex-1 md:flex-[0.5] justify-between h-full md:h-[370px] text-center md:text-left'>
        <h1 className='font-bold text-3xl md:text-[40px] text-homely-black'>About Us</h1>
        <p className='font-normal text-xl md:text-[28px] leading-9 w-full md:w-[530px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh.
          Pretium leo hendrerit interdum netus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh.
          Pretium leo hendrerit interdum netus
        </p>
        <button
          type='button'
          className="bg-homely-red text-homely-white rounded-lg p-2 self-center my-2 md:my-0 md:self-start font-bold text-xl"
        >
          See more
        </button>
      </section>

      <section className='flex-[0.4] hidden md:flex items-center justify-center h-[600px]'>
        <img src={food} alt="about-food" className='h-[500px]'/>
      </section>
    </main>
  )
}

export default About
