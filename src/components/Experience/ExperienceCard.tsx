import { Button } from "../../ui/MovingBorders";
import { workExperience } from "./model/Experience";

const ExperienceCard = ({
  id,
  className,
  desc,
  thumbnail,
  title,
}: workExperience) => {
  return (
    <Button
      key={id}
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
        <img src={thumbnail} alt={thumbnail} className="lg:w-32 md:w-20 w-16" />
        <div className="lg:ms-5">
          <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>
          <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
        </div>
      </div>
    </Button>
  );
};

export { ExperienceCard };
