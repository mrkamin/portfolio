import Link from "next/link"
import HeroSocial from "./HeroSocial"

const Hero = () => {
    
  return (
    <div className="relative min-h-screen">
        <div className='max-w-5xl min-h-screen mx-auto flex flex-col items-center justify-center gap-15'>
            <div className="flex flex-col items-center gpa-15">
            <p className='text-xl text-[#1f1f38]'>Hello I&apos;m</p>
            <h1 className='text-2xl md:text-4xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>Mohammad Rafi Amin</h1>
            <p className='mt-3 text-xl text-[#1f1f38]'>Full-Stack Developer</p>
            </div>
            <div className='flex gap-4 m-10'>
                <button className="border border-[#4db5ff] hover:bg-[#4db5ff] text-lg text-[#1f1f38] w-[8rem] rounded-[0.3rem] p-2 transition-all duration-500 ease-in-out">Download CV</button>
                <button className="hover:bg-[#fff] border border-[#4db5ff] text-lg text-[#1f1f38] w-[8rem] rounded-[0.3rem] p-2 bg-[#4db5ff] transition-all duration-500 ease-in-out">Lets Talk</button>
            </div>
            <p className=' text-xl text-[#1f1f38] text-justify bg-gradient-to-b from-[#4db5ff] w-full border-none rounded-[1rem] p-8 max-w-xl'>I can help you build a product, feature, or website look through some of my work and experience if you have a project that needs coding, do not hesitate to contact me.</p>
        </div>
        <div className="">
        <Link href="#contact" className="rounded-[3rem] rotate-90 p-2 bg-gradient-to-r from-[#4db5ff] hover:scale-105 courser-pointer  transition-all duration-500 ease-in-out text-xl text-[#1f1f38] absolute bottom-20 right-5 md:bottom-60 right-5 lg:bottom-20 lg:right-20" >Scroll Down</Link>
        </div>
        <HeroSocial />
    </div>
  )
}

export default Hero
