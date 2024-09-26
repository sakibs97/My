"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import MenuOverlay from './MenuOverlay';
import logo from "../../../public/logo.png"
import Image from 'next/image';

const navLink = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#ProjectPart",
    },
    {
        title: "Contact",
        path: "#contact",
    },

];

const Navbar = () => {
    let [navbarOpen, setNavbarOppen] = useState(false);


    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    <Image src={logo} alt="logo" className='w-[20%]' />

                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (<button onClick={() => setNavbarOppen(true)} className='flex items-center text-slate-200 hover:text-white px-3 py-2 border rounded border-slate-200 hover:border-white'><IoMenu className='w-5 h-5' /></button>) : (<button onClick={() => setNavbarOppen(false)} className='flex items-center text-slate-200 hover:text-white px-3 py-2 border rounded border-slate-200 hover:border-white'><RxCross1 className='w-5 h-5' /></button>)}
                </div>
                <div className="menu hidden md:block md:w-auto" id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
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