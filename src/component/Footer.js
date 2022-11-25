import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import img from "../svg/logo.svg";

const Footer = () => {
  return (
    <main id='contact' className='flex items-center justify-center p-8 mt-8 bg-homely-background-peach text-homely-black'>
        <section className='grid grid-cols-1 md:grid-cols-3 place-items-start md:place-items-center gap-x-8 gap-y-3 text-left'>
          <div className=''>
            <img src={img} alt="logo" />
            <p className='font-normal text-[15px] md:text-[20px]'>Solution for easy and accessible food hunting. You can trust us anywhere through this platform</p>
            <p className='font-normal text-[15px] md:text-[20px]'>
              &#169; 2022
            </p>
          </div>

          <div className='flex flex-col'>
            <h1 className='font-bold text-[20px] md:text-[30px]'>About Us</h1>
            <ul className='font-normal text-[15px] md:text-[20px]'>
              <li><a href="##" className='hover:underline'>Our Company</a></li>
              <li><a href="##" className='hover:underline'>Careers</a></li>
              <li><a href="##" className='hover:underline'>Investors</a></li>
              <li><a href="##" className='hover:underline'>Social Impact</a></li>
            </ul>
          </div>
          
          <div className='flex flex-col'>
            <h1 className='font-bold text-[20px] md:text-[30px]'>Social</h1>
            <ul className='font-normal text-[15px] md:text-[20px] self-center'>
              <li>
                <a href="##" className='hover:scale-105'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="##" className='hover:scal'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="##" className='hover:scale-[100px]'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>
        </section>
    </main>
  )
}

export default Footer
