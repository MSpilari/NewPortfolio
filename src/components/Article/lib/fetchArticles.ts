import { ArticlesDTO } from "../model/Articles";

const fetchArticles = async (): Promise<ArticlesDTO[]> => {
  const res = await fetch(
    "https://dev.to/api/articles?username=mspilari&per_page=3/latest"
  );
  const data = await res.json();

  return data;
};

export { fetchArticles };
