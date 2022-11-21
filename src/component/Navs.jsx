import React from "react";
import { Link } from "react-router-dom";
// import { Logo } from "../svg";
import { Sidebar } from "../component";

const Navs = ({ sidebar, setSidebar }) => {

    return(
        <>
            <nav className="flex items-center justify-between h-[110px] bg-homely-background-peach px-8">
                <div className="hidden md:block w-[107px] h-[44px]">
                    {/* <Logo/> */}
                </div>
        
                <ul className="flex-1 max-w-[800px] hidden md:flex items-center justify-between font-normal text-lg">
                    <li className="active:text-homely-red">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="active:text-homely-red">
                        <Link to="#">About us</Link>
                    </li>
                    <li className="active:text-homely-red">
                        <Link to="#">Our Products</Link>
                    </li>
                    <li className="active:text-homely-red">
                        <Link to="#">Testimonies</Link>
                    </li>
                    <li className="active:text-homely-red">
                        <Link to="#">Contact us</Link>
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