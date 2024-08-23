"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

let projectData = [
    {
        id: 1,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
    {
        id: 2,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
    {
        id: 3,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
    {
        id: 4,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
    {
        id: 5,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
    {
        id: 6,
        title: "React Protfolio Website",
        description: "Project 1 description",
        image: "/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        PreviewUrl: "/",
    },
]

const ProjectPart = () => {
    let [tag, setTag] = useState("All");

    let handelTagChange = (newTag) => {
        setTag(newTag)
    };

    let filtered = projectData.filter((project) =>
        project.tag.includes(tag)
    );


    return (
        <section>
            <div className="">
                <h2 className='text-center text-4xl font-bold text-white mt-4 mb-6'>My Project</h2>
                <div className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag onClick={handelTagChange} name="All" isSelected={tag === "All"} />
                    <ProjectTag onClick={handelTagChange} name="Web" isSelected={tag === "Web"} />
                    <ProjectTag onClick={handelTagChange} name="Mobile" isSelected={tag === "Mobile"} />
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filtered.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        PreviewUrl={project.PreviewUrl}
                    />)}
                </div>
            </div>
        </section>
    )
}

export default ProjectPart