import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import dynamic from "next/dynamic";

const Blog = dynamic(() =>
  import("@/src/components/Blog").then((mod) => mod.Blog)
);
const Experience = dynamic(() =>
  import("@/src/components/Experience").then((mod) => mod.Experience)
);
const Projects = dynamic(() =>
  import("@/src/components/Projects").then((mod) => mod.Projects)
);
const Stack = dynamic(() =>
  import("@/src/components/Stack").then((mod) => mod.Stack)
);

export default function Home() {
  return (
    <main className="bg-zinc-950 w-full text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Stack />
      <Experience />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
