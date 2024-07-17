import React from "react";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectListDTO } from "./model/Projects";
import { wordToIcon } from "../../utils/wordToIcon";
import { IconType } from "react-icons";

const ProjectsList: React.FC<ProjectListDTO> = ({ projects }) => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
      {projects.map(({ des, iconLists, id, img, link, title }) => {
        const newIconLists = wordToIcon(iconLists as string[]);

        return (
          <ProjectsCard
            des={des}
            iconLists={newIconLists}
            id={id}
            img={img}
            link={link}
            title={title}
          />
        );
      })}
    </div>
  );
};

export { ProjectsList };
