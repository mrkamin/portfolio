import Link from "next/link"
import HeroSocial from "./HeroSocial"

const Hero = () => {
    
  return (
    <div className="relative min-h-screen">
        <div className='max-w-5xl mx-auto py-20 flex flex-col items-center gap-15'>
            <p className='text-xl text-[#1f1f38]'>Hello I&apos;m</p>
            <h1 className='text-7xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>Mohammad Rafi Amin</h1>
            <p className='mt-3 text-xl text-[#1f1f38]'>Full-Stack Developer</p>
            <div className='flex gap-4 m-5'>
                <button>Download CV</button>
                <button>Lets Talk</button>
            </div>
            <p className=' text-xl text-[#1f1f38] text-justify bg-gradient-to-b from-[#4db5ff] w-full border-none rounded-[1rem] p-8 max-w-xl'>I can help you build a product, feature, or website look through some of my work and experience if you have a project that needs coding, do not hesitate to contact me.</p>
        </div>
        <div className="bg-[rgba(0,0,0,0.3)]">
        <Link href="#contact" className="scroll-down text-xl text-[#1f1f38] absolute bottom-20 right-20" >Scroll Down</Link>
        </div>
        <HeroSocial />
    </div>
  )
}

export default Hero
