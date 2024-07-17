import React from "react";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { SocialMediaLinksDTO } from "./model/SocialMediaLinks";

const SocialMediaLinks: React.FC<SocialMediaLinksDTO> = ({ socialMedia }) => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map(({ id, img, link, name }) => (
        <div
          key={id}
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <a
            href={link}
            className="h-full w-full flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name === "Github" && <FaGithub className="h-full w-full" />}
            {name === "LinkedIn" && <FaLinkedinIn className="h-full w-full" />}
            {name === "Blog" && <FaDev className="h-full w-full" />}
          </a>
        </div>
      ))}
    </div>
  );
};

export { SocialMediaLinks };
