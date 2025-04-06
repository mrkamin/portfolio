import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

const Footer = () => {
  const navLinks =[
    {href: "/", label: "Home"},
    {href: "#porfolio", label: "Portfolio"},
    {href: "#experience", label: "Experience"},
    {href: "#about", label: "About"},
    {href: "#services", label: "Services"},
    {href: "#testimoials", label: "Testimonials"},
    {href: "#contact", label: "Contact"}
  ];

  const socialLinks = [
    {href: "https://www.facebook.com/mrkamin2",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/rafikambiz/?hl=en",
      icon: <ImInstagram />,
      label: "Instagram",
    },
  ];

  return (
    <footer className="flex flex-col gap-5 items-center p-5 py-20 w-full h-[37rem] md:h-[29rem] lg:h-[25rem] bg-[#4db5ff]">
      <h1 className="text-2xl font-bold text-[#1f1f38]">MRK.Amin</h1>
      <nav>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
        {navLinks.map(({href, label}) => (
          <li key={href}>
            <Link href={href} 
              className="text-[#1f1f38] text-xl text-center bg-[rgba(0,0,0,0.1)] 
                        hover:bg-[rgba(0,0,0,0.6)] transition-all duration-500  
                        p-2 rounded-lg hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
      <div className="flex gap-5">
        {socialLinks.map(({href, icon,label}) => (
          <Link 
            key={href} 
            href={href} 
            target="_blank" 
            aria-label={label}
            className="p-5 text-[#1f1f38] text-2xl bg-[rgba(0,0,0,0.1)] rounded-[0.5rem] hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition-all duration-500"
          >
            {icon}
          </Link>
        ))}
      </div>
      <div>
        <small className="text-[#1f1f38]">&copy; {new Date().getFullYear()} MRK.AMIN</small>
      </div>
    </footer>
  )
}

export default Footer
