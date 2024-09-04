"use client";

import { useEffect, useState } from "react";
import { BlogResponseDto } from "../dto/BlogResponseDto";
import { ProjectCard } from "./ProjectCard";

const Blog = () => {
  const [articles, setArticles] = useState<BlogResponseDto>([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mspilari&per_page=4")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      id="blog"
    >
      <h1 className="text-yellow-500 text-4xl underline font-extrabold">
        Artigos
      </h1>
      <div className="w-[90%] mx-auto flex flex-wrap items-center justify-center gap-x-4">
        {articles.map((article) => (
          <ProjectCard
            key={article.id}
            title={article.title}
            description={article.description}
            imageUrl={article.cover_image}
            url={article.url}
          />
        ))}
      </div>
    </section>
  );
};

export { Blog };
