import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { capitaliseFirstLetter, convertToDate } from "../utils/functions";
import { BackButton } from "./BackButton";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(articleId).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return (
      <div className="main-body">
        <h1 className="isLoading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="main-body">
      <div className="content-container">
        <div className="content-top">
          <BackButton/>
        </div>
        <div className="content-bottom">
          <img src={article.article_img_url} className="article-page-image" />
          <h3 className="article-page-title">{article.title}</h3>
          <p className="article-page-author">
            {article.author} |{" "}
            <span className="article-page-date">
              {convertToDate(article.created_at)}
            </span>
          </p>
          <p className="article-page-topic">
            {capitaliseFirstLetter(article.topic)}
          </p>
          <p className="article-page-body">{article.body}</p>
        </div>
      </div>
    </div>
  );
};
