import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import LogoMobile from "@public/LogoMobile.png";
import LogoDesktop from "@public/Logo.png";

const Logo: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div className="w-40 ml-3 h-full flex items-center relative lg:w-full lg:ml-0 lg:justify-center">
      <Image
        className="w-full h-full object-contain"
        src={isMobile ? LogoMobile : LogoDesktop}
        alt="Logo MSpilari"
        sizes="25vw"
      />
    </div>
  );
};

export { Logo };
