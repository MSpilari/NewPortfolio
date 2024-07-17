import React from "react";
import { Hero } from "../src/components/Hero/Hero";
import { FloatingNav } from "../src/ui/FloatingNav";
import { Grid } from "../src/components/Grid/Grid";
import { Projects } from "../src/components/Projects/Projects";
import { navItems } from "../src/data";
import { Clients } from "../src/components/Clients/Clients";
import { Experience } from "../src/components/Experience/Experience";
import { Article } from "../src/components/Article/Article";
import { Footer } from "../src/components/Footer/Footer";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        {/* <Clients /> */}
        <Experience />
        <Article />
        <Footer />
      </div>
    </main>
  );
}
