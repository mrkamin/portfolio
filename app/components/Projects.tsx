"use client"
import { getProjects } from '@/sanity/sanity-utils'
import { useEffect, useState } from 'react';
import ProjectItems from './ProjectItems';
import { PortableTextBlock } from 'next-sanity';

type Project = {
  _id: string;
  name: string;
  description?: PortableTextBlock[];
  program?: PortableTextBlock[];
  image?: string;
  livedemo: string;
  github: string;
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(4);
    useEffect(() => {
      const fetchProjects = async () => {
        const data: Project[] = await getProjects();
        setProjects(data);
      };
      fetchProjects();
    }, []);
    const showMore = () => setVisibleProjects(projects.length);
    const showLess = () => setVisibleProjects(4);

  return (
    <div className='mx-auto flex flex-col gap-5 items-center py-10'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-xl text-[#1f1f38]'>My Recent Work</p>
        <h1 className='text-7xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>Portfolio</h1>
      </div> 
      <div className='flex flex-col gap-2 items-center w-full'>
        {projects.slice(0,4).map((project) => (
          <ProjectItems key={project._id} project={project} />
        ))} 
        {visibleProjects > 4 && (
          <div className='flex flex-col gap-2 items-center w-full'>
            {projects.slice(4, visibleProjects).map((project) => (
              <ProjectItems key={project._id} project={project} />
            ))}
          </div>
        )}
      </div> 
      <div className='mt-4 w-[90%]'>
        {visibleProjects <projects.length ? (
          <button 
            onClick={showMore}
            className='bg-gradient-to-r from-[#4db5ff] text-lg text-[#1f1f38] rounded-lg hover:bg-[#4db5ff] transition-all duration-500 ease-in-out p-2'
            >
              Show More...
            </button>
        ):(
          <button 
            onClick={showLess}
            className='bg-[#4db5ff] hover:bg-gradient-to-r from-[#4db5ff] text-lg text-[#1f1f38] p-2 rounded-lg transition-all duration-500 ease-in-out'
            >
              Show Less
            </button>
        )}
      </div>
    </div>
  );
};

export default Projects

