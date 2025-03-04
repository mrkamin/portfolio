"use client"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBookAlt, BiMessageRoundedDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('/')
  return (
    <div>
      <nav className="flex gap-5 m-10 b">
                <Link href="/" className={activeNav === '/' ? 'active' : ''}>
                    <AiOutlineHome />
                </Link>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
                    <AiOutlineUser />
                </a>
                <a href="#experince" onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active' : ''} >
                    <BiBookAlt />
                </a>
                <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} >
                    <RiServiceLine />
                </a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} >
                    <BiMessageRoundedDetail />
                </a>
            </nav>
    </div>
  )
}

export default Navbar
