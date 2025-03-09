import Link from "next/link"
import { FaAngellist } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const HeroSocial = () => {
  return (
    <div className="flex md:flex-col gap-5 hero-social absolute bottom-[85%] left-5 md:bottom-40 md:left-10 lg:bottom-20 lg:left-20 bg-[rgba(77,181,255,0.4)] border-none rounded-[3rem]">
       <Link
      href="https://github.com/mrkamin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiGithub />
    </Link>
    <Link
      href="https://www.linkedin.com/in/mohammad-rafi-amin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FiLinkedin />
    </Link>
    <Link
      href="https://wellfound.com/u/mohammad-rafi-amin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaAngellist />
    </Link>
    </div>
  )
}

export default HeroSocial
