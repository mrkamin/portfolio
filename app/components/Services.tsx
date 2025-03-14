import { BiCheck } from "react-icons/bi"

const Services = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10" id="services">
        <p className="text-xl text-[#1f1f38]">What I Offer</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent">Services</h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-2">
            <div className="flex flex-col gap-5 items-center w-full rounded-b-[2rem] border border-[#4db5ff] bg-[rgba(77,181,255,0.4)] ">
                <div className="bg-purple-900 p-5 w-full rounded-b-[2rem] flex justify-center">
                    <h1 className="text-white text-xl">UI/UX Design</h1>
                </div>
                <div className="flex flex-col gap-2 items-cetner p-5">
                <div className="flex gap-5 w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">User-Centric: Prioritizing user needs.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Consistency and Simplicity: Unified and intuitive design.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Visual Appeal: Engaging visual experiences.</p>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center w-full rounded-b-[2rem] border border-[#4db5ff] bg-[rgba(77,181,255,0.4)] ">
                <div className="bg-purple-900 p-5 w-full rounded-b-[2rem] flex justify-center">
                    <h1 className="text-white text-xl">Web Development</h1>
                </div>
                <div className="flex flex-col gap-2 items-cetner p-5">
                <div className="flex gap-5 w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Dynamic Interactivity: Real-time user engagement.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Cross-Platform Compatibility: Seamless multi-device access.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Scalability and Flexibility: Adaptable and responsive web
                    solutions.</p>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center w-full rounded-b-[2rem] border border-[#4db5ff] bg-[rgba(77,181,255,0.4)] ">
                <div className="bg-purple-900 p-5 w-full rounded-b-[2rem] flex justify-center">
                    <h1 className="text-white text-xl">Content Creation</h1>
                </div>
                <div className="flex flex-col gap-2 items-cetner p-5">
                <div className="flex gap-5 w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Relevance and Value: Audience-centric content creation.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Creativity and Originality: Engaging unique and innovative content.</p>
                </div>
                <div className="flex gap-5  w-full items-center">
                    <BiCheck className="text-purple-900" />
                    <p className="text-[#1f1f38]">Consistency and Strategy: Planned, strategic, and cohesive content.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
