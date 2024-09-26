"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

let TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Figma to HTML</li>
                <li>Bootstrap</li>
                <li>React.js/Redux</li>
                <li>Tailwind CSS</li>
                <li>Responsive design</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Naogaon Govt. College</li>
                <li>Front End Web Development with React</li>
            </ul>
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
        <section className='text-white'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" alt="about-image" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde soluta perferendis velit possimus ullam alias fugit sit aliquam magni sapiente sunt at quas, eaque nam tempora porro sint expedita inventore labore minima obcaecati non! Blanditiis corrupti sit, placeat similique, illo eius deleniti voluptas, atque quasi vel pariatur esse animi illum.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handelTabChange("skills")} active={tab === "skills"}> {""} Skills {""} </TabButton>
                        <TabButton selectTab={() => handelTabChange("education")} active={tab === "education"}> {""} Education {""} </TabButton>
                        <TabButton selectTab={() => handelTabChange("certifications")} active={tab === "certifications"}> {""} Certifications {""} </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutP