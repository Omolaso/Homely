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
} from '../component';

const LandingPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navs sidebar={sidebar} setSidebar={setSidebar}/>

      <div className='bg-homely-background-white py-6 min-h-screen'>
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