"use client"
import Image from "next/image"
import { useState } from "react"
import ProFileIMG from './assets/myprotfoliopicabout.png'
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { content } from "./Content"


const About = () => {
    const [isFullContentVisible, setIsFullContentVisible] = useState(false);
    const toggleContentVisibility = () => {
        setIsFullContentVisible(!isFullContentVisible)
    }

    const truncatedContent = isFullContentVisible ? content : content.slice(0, 530);
  return (
    <div className="flex flex-col gap-5 items-center">
        <p className="text-xl text-[#1f1f38]">Get to Know</p>
        <h1 className="text-xl md:text-3xl lg:text5xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent">About Me</h1>
    <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-5 w-[90%] items-start">
        <div className="bg-[linear-gradient(45deg,transparent,#4db5ff,transparent)] rounded-[2rem] overflow-hidden">
            <Image src={ProFileIMG} alt="ProfileIMG" className="rotate-[10deg] rounded-[2rem] hover:rotate-[0deg] transition-all duration-500 ease-in-out"/>
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
                <p style={{whiteSpace: 'pre-line'}}>
                    {truncatedContent}
                    {content.length > 220 && !isFullContentVisible && (
                        <button type="button" className="bg-gradient-to-r from-[#4db5ff] p-2 rounded-[0.5rem]" onClick={toggleContentVisibility}>
                            Read More...
                        </button>
                    )}
                    {content.length > 220 && isFullContentVisible && (
                        <button type="button" className="bg-gradient-to-r from-[#4db5ff] p-2 rounded-[0.5rem]" onClick={toggleContentVisibility}>
                            Read Less
                        </button>
                    )}
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
