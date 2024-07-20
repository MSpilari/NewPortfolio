import { Button } from "@components/01_Atoms/Button";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { GiClockwork } from "react-icons/gi";
import { MdMilitaryTech, MdOutlineWork } from "react-icons/md";

const NavigationBar = () => {
  return (
    <nav className="flex fixed bottom-0 w-full h-12 items-center justify-around z-20 bg-zinc-900 lg:flex-col lg:static lg:h-96 xl:h-full">
      <Link href="/" passHref>
        <Button
          data-testid="homeButton"
          className="text-2xl text-white lg:linkButton lg:linkAnimation"
          iconLabel={<AiFillHome className="lg:linkButtonSvg" />}
          animationText={<p className="hidden lg:flex lg:linkButtonP">Home</p>}
          aria-label="Home Button"
        />
      </Link>

      <Link href="/experience" passHref>
        <Button
          data-testid="aboutButton"
          className="text-2xl text-white lg:linkButton lg:linkAnimation"
          iconLabel={<GiClockwork className="lg:linkButtonSvg" />}
          animationText={
            <p className="hidden lg:flex lg:linkButtonP">Experience</p>
          }
          aria-label="Experience Button"
        />
      </Link>

      <Link href="/skills" passHref>
        <Button
          data-testid="skillsButton"
          className="text-2xl text-white lg:linkButton lg:linkAnimation"
          iconLabel={<MdMilitaryTech className="lg:linkButtonSvg" />}
          animationText={
            <p className="hidden lg:flex lg:linkButtonP">Skills</p>
          }
          aria-label="Skills Button"
        />
      </Link>

      <Link href="/projects" passHref>
        <Button
          data-testid="projectsButton"
          className="text-2xl text-white lg:linkButton lg:linkAnimation"
          iconLabel={<MdOutlineWork className="lg:linkButtonSvg" />}
          animationText={
            <p className="hidden lg:flex lg:linkButtonP">Projects</p>
          }
          aria-label="Projects Button"
        />
      </Link>

      <Link href="/login" passHref>
        <Button
          data-testid="loginButton"
          className="text-2xl text-white lg:linkButton lg:linkAnimation"
          iconLabel={<BsShieldLockFill className="lg:linkButtonSvg" />}
          animationText={<p className="hidden lg:flex lg:linkButtonP">Login</p>}
          aria-label="Login Button"
        />
      </Link>
    </nav>
  );
};

export { NavigationBar };
