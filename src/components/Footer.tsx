import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full flex items-center justify-center gap-1 text-base sm:text-lg mb-2">
      <p>Criado por ® MSpilari. - {date.getFullYear()}</p>
      <div className="flex items-center justify-center gap-2">
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
      </div>
    </footer>
  );
};

export { Footer };
