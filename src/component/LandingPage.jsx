import React, { useState } from 'react';
import { 
  Navs,
  About,
  ServiceGrid
} from '../component';

const LandingPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navs sidebar={sidebar} setSidebar={setSidebar}/>

      <div className='bg-homely-background-white py-4 min-h-screen'>
      {/* <div className={sidebar ? "components-blur-active" : "components-blur"}> */}
        <About/>
        <ServiceGrid/>
      </div>
    </>
  )
}

export default LandingPage