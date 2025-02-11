import Logo from "@/public/LogoMobile.png";
import Image from "next/image";
import Link from "next/link";
import { FaTools } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-4">
      <Image
        src={Logo}
        alt="Logo"
        className="h-full w-36 sm:w-40 md:w-48"
        priority={true}
      />

      <nav className="flex gap-4 items-center text-xl lg:text-2xl z-50">
        <Link href="#stack" className="hidden md:block">
          Ferramentas
        </Link>
        <Link href="#stack" className="md:hidden">
          <FaTools />
        </Link>

        <Link href="#projects" className="hidden md:block">
          Projetos
        </Link>
        <Link href="#projects" className="md:hidden">
          <MdWork />
        </Link>

        <Link href="#blog" className="hidden md:block">
          Artigos
        </Link>
        <Link href="#blog" className="md:hidden">
          <FaDev />
        </Link>
      </nav>
    </header>
  );
};

export { Header };
