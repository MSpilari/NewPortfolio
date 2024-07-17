import { workExperience } from "../../data";
import { ExperienceList } from "./ExperienceList";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <ExperienceList workExperience={workExperience} />
    </div>
  );
};

export { Experience };
