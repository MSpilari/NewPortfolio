import { FaLocationArrow } from "react-icons/fa6";

import Image from "next/image";
import footerGrid from "../../../public/footer-grid.svg";
import { socialMedia } from "../../data";
import { BorderMagicButton } from "../../ui/BorderMagicButton";
import { SocialMediaLinks } from "./SocialMediaLinks";

const Footer = () => {
  const actualDate = new Date();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src={footerGrid}
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BorderMagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {actualDate.getFullYear()} MSpilari
        </p>

        <SocialMediaLinks socialMedia={socialMedia} />
      </div>
    </footer>
  );
};

export { Footer };
