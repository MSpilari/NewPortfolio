import Link from "next/link";
import { words } from "../data/words";
import { StarsBackground } from "../ui/StarsBackground";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-screen h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <StarsBackground starDensity={0.002} />
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col items-center justify-center">
        <TypewriterEffect
          cursorClassName="bg-yellow-500 text-5xl"
          className="text-5xl"
          words={words}
        />
        <p className="mt-1">Fullstack Developer</p>
        <div className="flex items-center justify-center gap-3 text-4xl z-50 mt-1 lg:text-5xl">
          <Link
            className="flex items-center justify-center"
            href="https://github.com/MSpilari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            className="flex items-center justify-center"
            href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Hero };
