"use client"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { PortableText } from "next-sanity"
import { Project } from "@/types/Project"

import 'swiper/css';
import 'swiper/css/pagination';

interface TestamonialsSwiperProps {
    projects: Project[];
}

const Testamonialswiper: React.FC<TestamonialsSwiperProps> = ({projects}) => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center py-10">
        <p className="text-xl text-[#1f1f38]">Review from clients</p>
        <h1 className="text-xl md:text-3xl lg:text5xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent">Recomendations</h1>
        <Swiper
      className="w-[90%] md:w-[60%] lg:w-[40%]"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {projects.map((project) => (
            <SwiperSlide key={project._pid} className='!flex !flex-col !gap-5 !items-center text-justify  bg-[rgba(77,181,255,0.4)] p-10 rounded-[2rem]'>
                 {project.pimage && (
                  <Image 
                      src={project.pimage}
                      alt={project.pname} 
                      width={100} 
                      height={50} 
                      className='rounded-[50%] object-cover border-4 border-purple-900'
                  />
                 )}
                 <h1 className='text-[#1f1f38] text-xl font-bold'>{project.pname}</h1>
                 <h6 className='text-[#1f1f38]'>{project.pdescription && <PortableText value={project.pdescription} />}</h6>
            </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
  )
}

export default Testamonialswiper
