import React, { useState } from 'react';
import { 
  Navs,
  Home,
  ServiceGrid,
  DishGrid,
  About,
  MobileApp,
  Testimonies,
  Contact,
  Footer
} from '.';

const LandingPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navs sidebar={sidebar} setSidebar={setSidebar}/>

      <div className='bg-homely-background-white pt-6 min-h-screen'>
        <Home/>
        <ServiceGrid/>
        <DishGrid/>
        <About/>
        <MobileApp/>
        <Testimonies/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage