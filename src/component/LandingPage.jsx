import React, { useState } from 'react';
import { 
  Navs,
  About,
  ServiceGrid,
  DishGrid,
} from '../component';

const LandingPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navs sidebar={sidebar} setSidebar={setSidebar}/>

      <div className='bg-homely-background-white py-6 min-h-screen'>
      {/* <div className={sidebar ? "components-blur-active" : "components-blur"}> */}
        <About/>
        <ServiceGrid/>
        <DishGrid/>
      </div>
    </>
  )
}

export default LandingPage