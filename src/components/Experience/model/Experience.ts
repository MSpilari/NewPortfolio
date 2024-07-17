type ExperienceListDTO = {
  workExperience: workExperience[];
};

type workExperience = {
  id: number;
  title: string;
  desc: string;
  className?: string;
  thumbnail: string;
};

export type { ExperienceListDTO, workExperience };
