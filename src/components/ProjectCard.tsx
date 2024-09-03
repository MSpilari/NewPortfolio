"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/src/ui/Card3D";
import Link from "next/link";
import { ProjectCardDto } from "../dto/ProjectCardDto";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubRepo,
  url,
  techs,
}: ProjectCardDto) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-yellow-500 bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold md:text-2xl text-yellow-500 line-clamp-1"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 line-clamp-2"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full h-60 mt-4 relative">
          <Image
            src={imageUrl}
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            fill={true}
            alt="thumbnail"
          />
        </CardItem>
        {techs && (
          <CardItem className="w-full flex mt-3 items-center justify-end gap-2">
            {techs.map((tech) => (
              <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden relative">
                <Image
                  src={tech}
                  alt="tech Logo"
                  key={tech}
                  fill={true}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </CardItem>
        )}

        <div className="flex justify-between items-center mt-3">
          <CardItem
            translateZ={20}
            as={Link}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal border"
          >
            {githubRepo ? "Try now ->" : "Read article ->"}
          </CardItem>

          {githubRepo && (
            <CardItem
              translateZ={20}
              as={Link}
              target="_blank"
              rel="noopener noreferrer"
              href={githubRepo}
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              Code Repository
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export { ProjectCard };
