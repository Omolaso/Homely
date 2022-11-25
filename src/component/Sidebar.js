import React from "react";
// import { Link } from "react-router-dom";
import img from  "../svg/logo.svg"
// import { Logo } from "../svg"; wasn't displaying due to hidden in Navs.


const Sidebar = ({ sidebar, setSidebar }) => {

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const removeSidebar = () => {
        setSidebar(false); 
    };

    window.addEventListener('resize', removeSidebar);
    window.addEventListener('scroll', removeSidebar);

    return (
        <>
            <section className="flex item-center justify-between">
                <div>
                    <a href="/">
                        <img src={img} alt="logo" />
                    </a>
                </div>

                <div className={sidebar ? "hamburger-div" : "hamburger-pointer"} onClick={toggleSidebar}>
                    <span className="hamburger-span"></span>
                    <span className="hamburger-span"></span>
                    <span className="hamburger-span"></span>
                </div>
            </section>

            <div className={sidebar ? "sidebar-active" : "side-bar"}>
                <ul className="flex flex-col items-start font-normal px-8 py-4 text-lg bg-homely-background-peach gap-4 h-screen">
                    <li className="active:text-homely-red" onClick={toggleSidebar}>
                        <a href="#home">Home</a>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <a href="#about">About us</a>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <a href="#products">Our Products</a>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <a href="#testimonies">Testimonies</a>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <a href="#contact" onClick={removeSidebar}>Contact us</a>
                    </li>
                    <li className="flex-[0.3] w-full max-w-[150px]" onClick={removeSidebar}>
                        <button 
                            type="button"
                            className="bg-homely-red text-homely-white rounded-lg p-2 w-full"
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default Sidebar;