import { Experience } from "@/src/components/Experience";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Projects } from "@/src/components/Projects";
import { Stack } from "@/src/components/Stack";

export default function Home() {
  return (
    <main className="bg-zinc-950 w-full text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Stack />
      <Experience />
      <Projects />
    </main>
  );
}
