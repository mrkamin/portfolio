"use client";

import { PortableText, PortableTextBlock } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'

type Project = {
    _id: string;
    name: string;
    description?: PortableTextBlock[];
    program?: PortableTextBlock[];
    image?: string;
    livedemo?: string;
    github?: string;
};

const ProjectItems = ({project}: {project: Project}) => {
    
    return (
        <div 
          className='w-[90%] transition-all duration-500 ease-in-out 
                     hover:bg-transparent border hover:border-[#4db5ff]
                     rounded-lg p-4 grid md:grid-cols-1 lg:grid-cols-[3fr_1fr] 
                     bg-[rgba(77,181,255,0.4)] gap-4 items-center'
        >
            {project.image && (
                <Image 
                    src={project.image}
                    alt={project.name} 
                    width={1000} 
                    height={50} 
                    className='rounded-lg object-cover w-full h-full hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out'
                />
            )}
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl text-[#1f1f38] font-bold'>{project.name}</h1>
                <h6 className='text-lg text-justify text-[#1f1f38]'>{project.description && <PortableText value={project.description} />}</h6>
                <h1 className='font-bold'>{project.program && <PortableText value={project.program} />}</h1>
                <div className='flex gap-4 '>
                   <Link
                    className='text-center border border-[#4db5ff] hover:bg-[#4db5ff] text-lg text-[#1f1f38] w-[8rem] rounded-[0.3rem] p-2 transition-all duration-500 ease-in-out'
                    href={project.livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                   >
                    Live Demo
                   </Link>
                   <Link
                    className='text-center hover:bg-[#fff] border border-[#4db5ff] text-lg text-[#1f1f38] w-[8rem] rounded-[0.3rem] p-2 bg-[#4db5ff] transition-all duration-500 ease-in-out'
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                   >
                    Github
                   </Link>
                </div>
            </div>
        </div>
  )
}

export default ProjectItems
