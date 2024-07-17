import { useEffect, useState } from "react";
import { fetchArticles } from "../lib/fetchArticles";
import { wordToIcon } from "../../../utils/wordToIcon";
import { ArticlesDTO } from "../model/Articles";

const useArticlesViewModel = () => {
  const [articles, setArticles] = useState<ArticlesDTO[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      const updatedArticles = data.map((article) => ({
        ...article,
        tag_list: wordToIcon(article.tag_list as string[]),
      }));

      setArticles(updatedArticles);
    };
    getArticles();
  }, []);

  return { articles };
};

export { useArticlesViewModel };
