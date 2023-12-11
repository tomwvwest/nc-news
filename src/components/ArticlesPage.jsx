import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { convertToDate } from "../utils/functions";

export const ArticlesContainer = () => {
  const [articles, setArticles] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <div className="main-container">
        <h1 className="isLoading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="main-content-container">
        <div className="main-content-top main-content-top-articles">
          <Link to="/">
            <div className="back-arrow">
              <img src="../../images/back-arrow.png" alt="" />
            </div>
          </Link>
          <h2 className="content-header articles-content-header">Articles</h2>
        </div>
        <div className="main-content-bottom">
          {articles.map(article => {
            return (
              <div className="secondary-article" key={article.article_id}>
                <div className="secondary-left-side">
                  <img
                    src={article.article_img_url}
                    className="secondary-article-image"
                  />
                </div>
                <div className="secondary-right-side">
                  <p className="secondary-title">{article.title}</p>
                  <p className="secondary-author">{article.author}</p>
                  <p className="secondary-date">
                    {convertToDate(article.created_at)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
