import { IconType } from "react-icons";

type ArticlesDTO = {
  id: number;
  title: string;
  url: string;
  cover_image: string;
  tag_list: (string | IconType)[];
};

export type { ArticlesDTO };
