import React from 'react'
import { FaCode, FaEye } from "react-icons/fa";
import Link from 'next/link';


const ProjectCard = ({ imgUrl, title, description, gitUrl, PreviewUrl }) => {
    return (
        <div>
            <div style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
                className="h-52 md:h-72 rounded-t-xl relative group ">
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <FaCode className='h-10 w-10 text-[#ADB7BE]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
                    </Link>
                    <Link href={PreviewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <FaEye className='h-10 w-10 text-[#ADB7BE]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white' />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard