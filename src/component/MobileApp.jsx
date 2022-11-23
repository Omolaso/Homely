import React from "react";
import mobileApp from "../svg/mobile-app.svg";
import googlePlay from "../svg/google-play.svg";
import appStore from "../svg/app-store.svg";

const MobileApp = () => {
    return (
        <main id="mobileApp" className="px-8 mt-8">
            <header className='text-center'>
                <h1 className='font-bold text-3xl md:text-5xl text-homely-red'>Get our mobile app</h1>
                <p className='text-lg md:text-2xl font-normal text-homely-black mt-2'>Enjoy better experience</p>
            </header>
            <div className='flex flex-row items-center justify-between'>
                <section className='flex flex-col flex-1 md:flex-[0.5] justify-between h-full md:h-[370px] text-center md:text-left'>
                    <p className='font-normal text-xl md:text-[28px] leading-9 w-full md:w-[530px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh.
                        Pretium leo hendrerit interdum netus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh.
                        Pretium leo hendrerit interdum netus
                    </p>
                    <div className="flex flex-col md:flex-row gap-x-4 items-center">
                        <img src={googlePlay} alt="google-play" className="w-1/2 md:w-[210px] cursor-pointer"/>
                        <img src={appStore} alt="app-store" className="w-1/2 md:w-[180px] cursor-pointer" />
                    </div>
                </section>
        
                <section className='flex-[0.4] hidden md:flex items-center justify-center h-[600px]'>
                    <img src={mobileApp} alt="about-food" className='h-[500px]'/>
                </section>
            </div>
        </main>
    )
}

export default MobileApp;