"use client";

import { AboutText } from "@components/03_Organisms/AboutText";

const About = () => {
  return (
    <section className="flex flex-col relative lg:overflow-hidden h-[calc(100dvh-8rem)] w-full lg:flex-row lg:w-[calc(100%-80px)] lg:h-full">
      <AboutText />
    </section>
  );
};

export default About;
