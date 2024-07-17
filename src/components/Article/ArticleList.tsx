import { ArticleCard } from "./ArticleCard";
import { useArticlesViewModel } from "./viewModel/articlesViewModel";

const ArticleList = () => {
  const { articles } = useArticlesViewModel();

  return (
    <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export { ArticleList };
