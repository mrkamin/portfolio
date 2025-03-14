"use client"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBookAlt, BiMessageRoundedDetail } from "react-icons/bi"
import { GoProject } from "react-icons/go"
import { RiServiceLine } from "react-icons/ri"

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('/')
  return (
    <div>
      <nav className="flex gap-5 bg-[rgba(0,0,0,0.3)] p-2 border-none rounded-[3rem]">
            <Link href="/" className={activeNav === '/' ? 'active' : ''}>
                <AiOutlineHome />
            </Link>
            <Link href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
                <AiOutlineUser />
            </Link>
            <Link href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} >
                <GoProject />
            </Link>
            <Link href="#experience" onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active' : ''} >
                <BiBookAlt />
            </Link>
            <Link href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} >
                <RiServiceLine />
            </Link>
            <Link href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} >
                <BiMessageRoundedDetail />
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
