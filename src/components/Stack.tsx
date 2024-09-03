import { stackIcons } from "../data/stackIcons";
import { StackIcon } from "./StackIcon";

const Stack = () => {
  return (
    <section className="w-screen flex flex-col items-center" id="stack">
      <h1 className="text-yellow-500 text-3xl">Stack</h1>
      <div className="flex flex-wrap w-[95%] mx-auto items-center justify-center">
        {stackIcons.map((icon) => (
          <StackIcon icon={icon} key={icon.url} />
        ))}
      </div>
    </section>
  );
};

export { Stack };
