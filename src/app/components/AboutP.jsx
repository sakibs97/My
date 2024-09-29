"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

let TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='md:w-[500px] flex flex-wrap'>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>HTML</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>CSS</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Javascript</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Figma to HTML</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Bootstrap</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>React</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Tailwind CSS</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Github</p>
                <p className='border-secondary-300 border-[2px] rounded-lg py-3 px-3 m-2 text-center'>Responsive design</p>
            </div>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>English</li>
                <li>Front End Web Developer</li>
            </ul>
        )
    }
]

const AboutP = () => {
    let [tab, setTab] = useState("skills");
    let [isPending, startTransition] = useTransition();


    let handelTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white' id='about'>
            <div className="lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about-image" className='mx-auto' width={500} height={500} />
                <div className="mt-4 lg:mt-0 text-left flex flex-col h-full">
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde soluta perferendis velit possimus ullam alias fugit sit aliquam magni sapiente sunt at quas, eaque nam tempora porro sint expedita inventore labore minima obcaecati non! Blanditiis corrupti sit, placeat similique, illo eius deleniti voluptas, atque quasi vel pariatur esse animi illum.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handelTabChange("skills")} active={tab === "skills"}> {""} Skills {""} </TabButton>
                        <TabButton selectTab={() => handelTabChange("certifications")} active={tab === "certifications"}> {""} Certifications {""} </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutP