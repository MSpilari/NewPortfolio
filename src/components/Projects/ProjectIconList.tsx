import { FC } from "react";
import { ProjectIconListDTO } from "./model/Projects";
import { ProjectIcon } from "./ProjectIcon";

const ProjectIconList: FC<ProjectIconListDTO> = ({ iconLists }) => {
  return (
    <div className="flex items-center">
      {iconLists.map((Icon, index) => (
        <ProjectIcon Icon={Icon} index={index} key={index} />
      ))}
    </div>
  );
};

export { ProjectIconList };
