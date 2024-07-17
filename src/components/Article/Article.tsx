"use client";
import { ArticleList } from "./ArticleList";

const Article = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">articles</span>
      </h1>
      <ArticleList />
    </section>
  );
};

export { Article };
