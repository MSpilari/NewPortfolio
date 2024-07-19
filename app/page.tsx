"use client";

import { useMediaQuery } from "react-responsive";

import AnimationDesktopFile from "@assets/indexAnimationDesktop.json";
import AnimationMobileFile from "@assets/indexAnimationMobile.json";

import { Animation } from "@components/01_Atoms/Animation";
import { Greet } from "@components/03_Organisms/Greet";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div className="flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full ">
      <Animation
        animationFile={isMobile ? AnimationMobileFile : AnimationDesktopFile}
        className="w-full h-full"
      />
      <Greet />
    </div>
  );
};

export default HomePage;
