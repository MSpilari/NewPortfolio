import { words } from "../data/words";
import { StarsBackground } from "../ui/StarsBackground";
import { TypewriterEffect } from "../ui/TypewriterEffect";

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
        <p className="mt-1">Fullstack Developer & Software Engineer</p>
      </div>
    </section>
  );
};

export { Hero };
