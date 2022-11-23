import React from "react";
// import { Link } from "react-router-dom";
import { Logo } from "../svg";
import { Sidebar } from "../component";

const Navs = ({ sidebar, setSidebar }) => {

    return(
        <>
            <nav id="home" className="flex items-center justify-between h-[110px] bg-homely-background-peach px-8">
                <div className="hidden md:block w-[107px] h-[44px]">
                    <a href="/">
                        <Logo/>
                    </a>
                </div>
        
                <ul className="flex-1 max-w-[800px] hidden md:flex items-center justify-between font-normal text-lg">
                    <li className="active:text-homely-red">
                        <a href="#home">Home</a>
                    </li>
                    <li className="active:text-homely-red">
                        <a href="#about">About us</a>
                    </li>
                    <li className="active:text-homely-red">
                        <a href="#products">Our Products</a>
                    </li>
                    <li className="active:text-homely-red">
                        <a href="#testimonies">Testimonies</a>
                    </li>
                    <li className="active:text-homely-red">
                        <a href="#contact">Contact us</a>
                    </li>
                    <li className="flex-[0.3]">
                        <button 
                            type="button"
                            className="bg-homely-red text-homely-white rounded-lg p-2 w-full"
                        >
                            Cart 
                        </button>
                    </li>
                </ul>

                <div className="block md:hidden w-full">
                    <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
                </div>
            </nav>
        </>
    )
}

export default Navs;