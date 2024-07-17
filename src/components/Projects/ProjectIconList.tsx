import { IconType } from "react-icons";
import { ProjectIcon } from "./ProjectIcon";
import { FC } from "react";
import { ProjectIconListDTO } from "./model/Projects";

const ProjectIconList: FC<ProjectIconListDTO> = ({ iconLists }) => {
  return (
    <div className="flex items-center">
      {iconLists.map((Icon, index) => (
        <ProjectIcon Icon={Icon} index={index} />
      ))}
    </div>
  );
};

export { ProjectIconList };
