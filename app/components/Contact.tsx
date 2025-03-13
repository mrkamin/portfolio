import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { RiMessengerFill } from "react-icons/ri"
import { SiMinutemailer } from "react-icons/si"

const Contact = () => {
  return (
    <div className="flex flex-col gap-5 py-10 items-center">
      <div className='flex flex-col items-center gap-2'>
        <p className='text-xl text-[#1f1f38]'>Get In Touch</p>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#4db5ff] via-purple-500 to-[#4db5ff] bg-clip-text text-transparent'>Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%]" >
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-3 items-center py-5 bg-[rgba(77,181,255,0.4)] rounded-[2rem] w-[100%] md:w-[80%] lg:w-[50%]">
                <SiMinutemailer className="text-purple-900 text-2xl" />
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-[#1f1f38]">Email</h1>
                    <p className="text-[#1f1f38]">mrkamin2@gmail.com</p>
                </div>
                <Link 
                    href="mailto:mrkamin2@gmail.com"
                    target="_blank"
                    className="text-purple-900 font-bold hover:text-purple-400 transition-all duration-500 ease-in-out"
                >
                    send email
                </Link>
            </div>
            <div className="flex flex-col gap-3 items-center py-5 bg-[rgba(77,181,255,0.4)] rounded-[2rem] w-[100%] md:w-[80%] lg:w-[50%]">
                <BsWhatsapp className="text-purple-900 text-2xl" />
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-[#1f1f38]">Whats Up</h1>
                    <p className="text-[#1f1f38]">+923367813344</p>
                </div>
                <Link 
                    href="https://api.whatsapp.com//send?phone=00923367813344"
                    target="_blank"
                    className="text-purple-900 font-bold hover:text-purple-400 transition-all duration-500 ease-in-out"
                >
                    send messege
                </Link>
            </div><div className="flex flex-col gap-3 items-center py-5 bg-[rgba(77,181,255,0.4)] rounded-[2rem] w-[100%] md:w-[80%] lg:w-[50%]">
                <RiMessengerFill className="text-purple-900 text-2xl" />
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-[#1f1f38]">messenger</h1>
                    <p className="text-[#1f1f38]">Linkdin</p>
                </div>
                <Link 
                    href="https://www.linkedin.com/in/mohammad-rafi-amin/"
                    target="_blank"
                    className="text-purple-900 font-bold hover:text-purple-400 transition-all duration-500 ease-in-out"
                >
                    send messege
                </Link>
            </div>
        </div>
        <div>
            <form action="" className="flex flex-col gap-5 w-[100%] md:w-[90%] lg:w-[80%]">
                <input type="text" name="name" placeholder="Type your name please" className="border border-[#1f1f38] rounded-[0.5rem] p-4"/>
                <input type="text" name="email" placeholder="Type your email please" className="border border-[#1f1f38] rounded-[0.5rem] p-4"/>
                <textarea name="messege" rows={7} placeholder="Type your messege please" className="border border-[#1f1f38] rounded-[0.5rem] p-4"/>
                <button type="submit" className="w-[10rem] bg-gradient-to-r from-[#4db5ff] text-lg text-[#1f1f38] rounded-lg hover:bg-[#4db5ff] transition-all duration-500 ease-in-out p-2">
                    Send Messege
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
