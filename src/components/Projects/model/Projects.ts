import { IconType } from "react-icons";

type ProjectsDTO = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: (string | IconType)[];
  link: string;
};

type ProjectListDTO = {
  projects: ProjectsDTO[];
};

type ProjectIconListDTO = {
  iconLists: IconType[];
};

type ProjectIconDTO = {
  Icon: IconType;
  index: number;
};

export type { ProjectsDTO, ProjectListDTO, ProjectIconListDTO, ProjectIconDTO };
