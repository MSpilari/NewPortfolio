import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { ProjectsDTO } from "./model/Projects";
import { FaLocationArrow } from "react-icons/fa6";
import { ProjectIconList } from "./ProjectIconList";
import { IconType } from "react-icons";
import Image from "next/image";

const ProjectsCard: React.FC<ProjectsDTO> = ({
  id,
  des,
  iconLists,
  img,
  link,
  title,
}) => {
  return (
    <div
      key={id}
      className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
    >
      <PinContainer title={link} href={link}>
        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
            {/* <img src="/bg.png" alt="bg-img" /> */}
          </div>
          <Image
            src={img}
            alt={title}
            className="z-10 absolute bottom-0"
            fill={true}
          />
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>
        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
          {des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <ProjectIconList iconLists={iconLists as IconType[]} />

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export { ProjectsCard };
