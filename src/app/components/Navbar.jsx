"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { CgMenuMotion } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import MenuOverlay from './MenuOverlay';
import logo from "../../../public/logo.png"
import Image from 'next/image';

const navLink = [
    {
        title: "Home",
        path: "#header",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#contact",
    },

];

const Navbar = () => {
    let [navbarOpen, setNavbarOppen] = useState(false);


    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-50'>
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className=''>
                    <Image src={logo} alt="logo" className='w-[80px]' />

                </Link>
                <div className="mobile-menu pr-5 block lg:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOppen(true)}
                            className='flex items-center text-slate-200 hover:text-white'>
                            <CgMenuMotion className='w-10 h-10' />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOppen(false)}
                            className='flex items-center text-slate-200 hover:text-white'>
                            <RxCross1 className='w-10 h-10' />
                        </button>
                    )}
                </div>
                <div className="menu hidden lg:block lg:w-auto" id='navbar'>
                    <ul className='flex p-4 lg:p-0 lg:flex-row lg:space-x-8'>
                        {navLink.map((link, i) => (
                            <li key={i}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay link={navLink} /> : null}
        </nav>
    )
}

export default Navbar