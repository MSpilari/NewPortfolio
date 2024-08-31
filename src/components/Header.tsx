import Link from "next/link";
import Logo from "@/public/LogoMobile.png";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4">
      <Image src={Logo} alt="Logo" className="h-full w-36 sm:w-40 md:w-48 " />

      <nav className="flex gap-4 items-center text-xl lg:text-2xl z-50">
        <Link href="#stack" className="hidden md:block">
          Stack
        </Link>
        <Link href="#stack" className="md:hidden">
          <FaTools />
        </Link>

        <Link href="#projects" className="hidden md:block">
          Projects
        </Link>
        <Link href="#projects" className="md:hidden">
          <MdWork />
        </Link>

        <Link href="#blog" className="hidden md:block">
          Blog
        </Link>
        <Link href="#blog" className="md:hidden">
          <FaDev />
        </Link>

        <Link
          href="https://github.com/MSpilari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>

        <Link
          className="text-blue-800"
          href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </nav>
    </header>
  );
};

export { Header };
