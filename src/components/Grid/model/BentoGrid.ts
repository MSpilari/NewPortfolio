type BentoGridDTO = {
  className?: string;
  children?: React.ReactNode;
};

type BentoGridItemDTO = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
};

export type { BentoGridDTO, BentoGridItemDTO };
