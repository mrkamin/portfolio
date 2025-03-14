"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { Project } from "@/types/Project"
import { ppGetProjects } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";



const About = () => {
    const [isFullContentVisible, setIsFullContentVisible] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data: Project[] = await ppGetProjects();
                console.log("Fetched projects:", data); 
                setProjects(data)
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects()
    }, []);

    const toggleContentVisibility = () => {
        setIsFullContentVisible(!isFullContentVisible)
    }

    
    return (
    <div className="flex flex-col gap-5 items-center py-10" id="about">
        <p className="text-xl text-[#1f1f38]">Get to Know</p>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent">About Me</h1>
    <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-5 w-[90%] items-start">
        <div className="bg-[linear-gradient(45deg,transparent,#4db5ff,transparent)] rounded-[2rem] overflow-hidden">
            {projects.length > 0 ? (
                <Image 
                    src={projects[0].ppimage} 
                    alt="ProfileIMG" 
                    className="rotate-[10deg] rounded-[2rem] hover:rotate-[0deg] transition-all duration-500 ease-in-out"
                    width={1000}
                    height={1000}
                    objectFit="cover"
                />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
        <div className="flex flex-col gap-5 w-[96%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-5 items-center bg-[rgba(77,181,255,0.4)] p-10 rounded-[2rem]">
                    <FaAward className="text-purple-900 text-2xl"/>
                    <h1 className="text-2xl font-bold text-[#1f1f38]">Experience</h1>
                    <p className="text-[#1f1f38]">2+ Years Working</p>
                </div>
                <div className="flex flex-col gap-5 items-center bg-[rgba(77,181,255,0.4)] p-10 rounded-[2rem]">
                    <FiUser className="text-purple-900 text-2xl" />
                    <h1 className="text-2xl font-bold text-[#1f1f38]">Clients</h1>
                    <p className="text-[#1f1f38]">50+ WorldWide</p>
                </div>
                <div className="flex flex-col gap-5 items-center bg-[rgba(77,181,255,0.4)] p-10 rounded-[2rem]">
                    <VscFolderLibrary className="text-purple-900 text-2xl" />
                    <h1 className="text-2xl font-bold text-[#1f1f38]">Projects</h1>
                    <p className="text-[#1f1f38]">40+ Complited</p>
                </div>
            </div>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <p style={{whiteSpace: 'pre-line'}}>
                        {projects.length > 0 && (
                            <>
                            <PortableText 
                                value={isFullContentVisible ? projects[0].ppdescription : projects[0].ppdescription.slice(0, 3)} 
                            />
                        {projects[0].ppdescription.length > 3 && (
                            <button 
                            type="button" 
                            className="bg-gradient-to-r from-[#4db5ff] p-2 rounded-[0.5rem]" 
                            onClick={toggleContentVisibility}
                        >
                            {isFullContentVisible ? "Read Less" : "Read More..."}
                        </button>
                        )}
                        </>
                        )}
                </p>

                )}
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
