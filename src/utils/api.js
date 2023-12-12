import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://its-the-news-2.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (id) => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    });
}