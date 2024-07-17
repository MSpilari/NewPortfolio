import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceListDTO } from "./model/Experience";

const ExperienceList: React.FC<ExperienceListDTO> = ({ workExperience }) => {
  return (
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
      {workExperience.map(({ id, thumbnail, title, desc }) => {
        return (
          <ExperienceCard
            id={id}
            desc={desc}
            thumbnail={thumbnail}
            title={title}
          />
        );
      })}
    </div>
  );
};

export { ExperienceList };
