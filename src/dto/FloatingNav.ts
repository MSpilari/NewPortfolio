type FloatingNavDTO = {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
};

export type { FloatingNavDTO };
