import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <div className='flex flex-col gap-5 items-center py-10'>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-xl text-[#1f1f38]'>What I Know</p>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>My Experience</h1>
      </div>
      <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='flex flex-col gap-10 py-10 items-center bg-[rgba(77,181,255,0.4)] rounded-3xl'>
            <h1 className='flex flex-col items-center text-2xl bg-gradient-to-r from-[#4db5ff] via-purple-900 to-[#4db5ff] bg-clip-text text-transparent font-bold'>Languages</h1>
            <div className='flex flex-col w-[70%] gap-5'>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>JavaScript</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Ruby</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>HTML</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>CSS</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Python</h2>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-10 py-10 items-center bg-[rgba(77,181,255,0.4)] rounded-3xl'>
            <h1 className='flex flex-col items-center text-2xl bg-gradient-to-r from-[#4db5ff] via-purple-900 to-[#4db5ff] bg-clip-text text-transparent font-bold'>Frameworks</h1>
            <div className='flex flex-col w-[70%] gap-5'>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Ruby on Rails</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>React</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>RSpec</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Capybara</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Tailwind</h2>
            </div>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Bootstrap</h2>
            </div>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Sass</h2>
            </div>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Chakra UI</h2>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-10 py-10 items-center bg-[rgba(77,181,255,0.4)] rounded-3xl'>
            <h1 className='flex flex-col items-center text-2xl bg-gradient-to-r from-[#4db5ff] via-purple-900 to-[#4db5ff] bg-clip-text text-transparent font-bold'>Skills</h1>
            <div className='flex flex-col w-[70%] gap-5'>
            <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>PostgreSql</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Github</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Git</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Codepen</h2>
            </div>
             <div className='flex gap-5 w-[70%] items-center'>
                <BsPatchCheckFill className='text-purple-900' />
                <h2 className='text-xl text-[#1f1f38] font-bold'>Gitlab</h2>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
