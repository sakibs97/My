"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

let projectData = [
    {
        id: 1,
        title: "Hekto E-commerce Website",
        description: "Hekto is a web application built with ReactJS, a popular JavaScript library for building user interfaces & responsive design. Deployed on Vercel, the project takes advantage of React’s component-based architecture to deliver a fast, scalable, and maintainable user experience.",
        image: "/projects/hekto.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/sakibs97/Project-Hekto",
        PreviewUrl: "https://hektok.vercel.app/",
    },
    {
        id: 2,
        title: "Login & User Dashboard",
        description: "Signup is a web application developed using ReactJS, a powerful library for building dynamic user interfaces & responsive design. It provides an efficient and modular way to manage user Signup and authentication. The project is designed for scalability and performance, utilizing the React component architecture to ensure reusability and easy maintenance",
        image: "/projects/singin.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/sakibs97/singup",
        PreviewUrl: "https://singsh.vercel.app/",
    },
    {
        id: 3,
        title: "Real Estate",
        description: "Real Estate leverages ReactJS to build a feature-rich, modular web application aimed at real estate professionals and home buyers. The project focuses on delivering a seamless user experience, with fast-loading pages and interactive components for browsing and managing property listings effortlessly",
        image: "/projects/realestate.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/sakibs97/Real-Estate",
        PreviewUrl: "https://testestate.vercel.app/",
    },
    {
        id: 4,
        title: "Educational Website",
        description: "This Project is a learning platform built with ReactJS, designed to deliver an interactive and dynamic user experience. The project leverages React’s component-based architecture to create a responsive and modular interface, simplifying content delivery and enhancing user engagement.",
        image: "/projects/learnone.png",
        tag: ["All", "Landing Page", "React"],
        gitUrl: "https://github.com/sakibs97/Project-Learn",
        PreviewUrl: "https://learnone.vercel.app/",
    },
    {
        id: 5,
        title: "Webflow Agency With React",
        description: "Webflow Agency is built with ReactJS and designed to be fully responsive, ensuring a smooth experience across all devices, from mobile to desktop.",
        image: "/projects/webflow-react.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/sakibs97/Webflow-Agency-React",
        PreviewUrl: "https://webflow-react.vercel.app/",
    },
    {
        id: 6,
        title: "Organic",
        description: "The 'Organic' project is a responsive website template for organic products, built using the Bootstrap framework. It adapts seamlessly across devices, offering a clean, user-friendly layout for easy navigation and shopping",
        image: "/projects/organic-bot.png",
        tag: ["All", "Bootstrap"],
        gitUrl: "https://github.com/sakibs97/Organic-Bootstrap",
        PreviewUrl: "https://organic-bot.vercel.app/index.html",
    },
    {
        id: 7,
        title: "Webflow Agency With Bootstrap",
        description: "This project uses Bootstrap, a popular CSS framework, to create a responsive, mobile-friendly website. The combination ensures a fast, adaptable layout that looks great on all devices.",
        image: "/projects/webflow-bot.png",
        tag: ["All", "Bootstrap"],
        gitUrl: "https://github.com/sakibs97/Webflow-Agency-Bootstrap",
        PreviewUrl: "https://webflowb.vercel.app/",
    },
    {
        id: 8,
        title: "Headphone Store",
        description: "This is a responsive headphone store created with React.js and Bootstrap. It’s designed to look great on any device, from mobile phones to desktops. Custom styling adds a modern touch, making it easy and enjoyable for users to browse and shop.",
        image: "/projects/headphone-bu.png",
        tag: ["All", "React", "Landing Page"],
        gitUrl: "https://github.com/sakibs97/Headphone-Store",
        PreviewUrl: "https://headphone-buy.vercel.app/",
    },
    {
        id: 8,
        title: "Orebi",
        description: "The 'Orebi' project is built using React and Vite, emphasizing responsive design. The use of Tailwind CSS for styling ensures that the design is mobile-friendly and adaptable across devices. This project serves as a foundation for developing modern web applications with efficient build processes.",
        image: "/projects/orebi.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/sakibs97/Orebi",
        PreviewUrl: "https://orebis.vercel.app/",
    },
    {
        id: 8,
        title: "Single Page",
        description: "This project is a responsive single-page application built with React.js, providing a smooth user experience through dynamic content loading. It adapts to different screen sizes, ensuring usability across all devices.",
        image: "/projects/react-single.png",
        tag: ["All", "React", "Landing Page"],
        gitUrl: "https://github.com/sakibs97/React-Single-Page",
        PreviewUrl: "https://react-single.vercel.app/",
    },
]

const ProjectPart = () => {
    let [tag, setTag] = useState("All");
    let ref = useRef(null)
    let isInView = useInView(ref, { once: true });

    let handelTagChange = (newTag) => {
        setTag(newTag)
    };

    let filtered = projectData.filter((project) =>
        project.tag.includes(tag)
    );
    let cardVarients = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='project'>
            <div className="">
                <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Project</h2>
                <div className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag onClick={handelTagChange} name="All" isSelected={tag === "All"} />
                    <ProjectTag onClick={handelTagChange} name="React" isSelected={tag === "React"} />
                    <ProjectTag onClick={handelTagChange} name="Bootstrap" isSelected={tag === "Bootstrap"} />
                    <ProjectTag onClick={handelTagChange} name="Landing Page" isSelected={tag === "Landing Page"} />

                </div>
                <ul ref={ref} className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">{filtered.map((project, index) => (
                    <motion.li key={index} variants={cardVarients} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            PreviewUrl={project.PreviewUrl}
                        />
                    </motion.li>
                ))}
                </ul>
            </div>
        </section >
    )
}

export default ProjectPart