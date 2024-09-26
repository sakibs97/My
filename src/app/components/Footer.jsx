import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"

const Footer = () => {
    return (
        <footer className='footer border-t-[1px] border-t-[#33353F] z-10  text-white'>
            <div className="container mx-auto px-8 py-7 flex justify-between items-center">
                <span>
                    <Image src={logo} className='w-[20%]' />
                </span>
                <p className='text-slate-600'>All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer