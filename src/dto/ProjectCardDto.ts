type ProjectCardDto = {
  title: string;
  description: string;
  imageUrl: string;
  githubRepo?: string;
  url: string;
  techs?: string[];
};

export type { ProjectCardDto };
