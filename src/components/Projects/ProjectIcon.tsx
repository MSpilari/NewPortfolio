import { ProjectIconDTO } from "./model/Projects";

const ProjectIcon: React.FC<ProjectIconDTO> = ({ Icon, index }) => {
  return (
    <div
      key={index}
      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
      style={{ transform: `translateX(-${5 * index * 2}px)` }}
    >
      <Icon className="w-[70%] h-[70%]" />
    </div>
  );
};

export { ProjectIcon };
