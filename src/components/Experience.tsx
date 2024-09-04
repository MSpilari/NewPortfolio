import { data } from "../data/experience";
import { Timeline } from "../ui/Timeline";

const Experience = () => {
  return (
    <section
      className="w-full min-h-fit flex flex-col items-center justify-center overflow-hidden"
      id="experience"
    >
      <h1 className="text-yellow-500 text-4xl underline font-extrabold">
        Experiência
      </h1>
      <Timeline data={data} />
    </section>
  );
};

export { Experience };
