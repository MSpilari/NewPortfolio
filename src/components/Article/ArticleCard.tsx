import Image from "next/image";
import { ArticlesDTO } from "./model/Articles";
import { GlareCard } from "./ui/GlareCard";
import { FaLocationArrow } from "react-icons/fa6";
import { ArticleTags } from "./ArticleTags";
import React from "react";

const ArticleCard: React.FC<{ article: ArticlesDTO }> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer"
      key={article.id}
    >
      <GlareCard className="flex flex-col justify-center items-center">
        <Image
          src={article.cover_image}
          alt={article.title}
          fill={true}
          className="pb-[40%] z-0 absolute"
        />
        <h1 className="z-10 pt-[65%] px-2 line-clamp-2 lg:text-3xl text-2xl font-bold">
          {article.title}
        </h1>

        <ArticleTags tag_list={article.tag_list} />

        <div className="flex justify-center items-center z-10 absolute bottom-4 right-8">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer">
            Read
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </GlareCard>
    </a>
  );
};

export { ArticleCard };
