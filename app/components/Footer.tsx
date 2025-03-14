import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5 py-20 w-full h-[37rem] md:h-[29rem] lg:h-[25rem] bg-[#4db5ff]">
      <h1 className="text-2xl font-bold text-[#1f1f38]">MRK.Amin</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
        <Link href="/" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Home</Link>
        <Link href="#portfolio" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Portfolio</Link>
        <Link href="#experience" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Experience</Link>
        <Link href="#about" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">About</Link>
        <Link href="#services" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Services</Link>
        <Link href="#testamonials" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Testamonials</Link>
        <Link href="#contact" className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  p-2 rounded-[0.5rem] hover:text-white">Contacts</Link>
      </div>
      <div className="flex gap-5 items-center">
        <Link href="https://www.facebook.com/mrkamin2" target="_blank" className="p-5 text-[#1f1f38] text-2xl bg-[rgba(0,0,0,0.1)] rounded-[0.5rem] hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition-all duration-500">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com/rafikambiz/?hl=en" target="_blank" className="p-5 text-[#1f1f38] text-2xl bg-[rgba(0,0,0,0.1)] rounded-[0.5rem] hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition-all duration-500">
          <ImInstagram />  
        </Link>
      </div>
      <div>
        <small className="text-[#1f1f38]">&copy; MRK.AMIN</small>
      </div>
    </div>
  )
}

export default Footer
