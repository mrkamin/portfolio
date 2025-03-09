import { getProjects } from '@/sanity/sanity-utils'
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    const projects = await getProjects();
  return (
    <div className='mx-auto py-20 flex flex-col gap-5 items-center'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-xl text-[#1f1f38]'>My Recent Work</p>
        <h1 className='text-7xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>Portfolio</h1>
      </div> 
      <div className='flex flex-col gap-2 items-center w-full'>
      {projects.map((project) => (
        <div key={project._id} 
          className='w-[90%] transition-all duration-500 ease-in-out 
                     hover:bg-transparent border hover:border-[#4db5ff]
                     rounded-lg p-4 grid md:grid-cols-1 lg:grid-cols-[3fr_1fr] 
                     bg-[rgba(77,181,255,0.4)] gap-4 items-center'
        >
            {project.image && (
                <Image src={project.image}
                alt={project.name} width={1000} height={50} className='rounded-lg object-cover w-full h-full hover:scale-105 cursor-pointer transition-transform duration-500 ease-in-out' />
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
      ))}
      </div> 
      
    </div>
  )
}

