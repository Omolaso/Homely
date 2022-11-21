import React from "react";
import { Link } from "react-router-dom";
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
                    <img src={img} alt="logo" />
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
                        <Link to="#">Home</Link>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <Link to="#">About us</Link>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <Link to="#">Our Products</Link>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <Link to="#">Testimonies</Link>
                    </li>
                    <li className="active:text-homely-red" onClick={removeSidebar}>
                        <Link to="#" onClick={removeSidebar}>Contact us</Link>
                    </li>
                    <li className="flex-[0.3] w-full max-w-[150px]" onClick={removeSidebar}>
                        <button 
                            type="button"
                            className="bg-homely-red text-homely-white rounded-lg p-2 w-full"
                        >
                            Cart 
                        </button>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default Sidebar;