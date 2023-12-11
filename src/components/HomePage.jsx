import { useEffect, useState } from "react";
import { convertToDate, findTopArticles } from "../utils/functions";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topArticles, setTopArticles] = useState("");

  useEffect(() => {
    findTopArticles().then((res) => {
      setTopArticles(res);
      setIsLoading(false);
    });
  }, []);

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
        <div className="main-content-top">
          <h2 className="content-header">Trending</h2>
          <Link to="/articles">
            <button className="view-articles-button button">
              All Articles
            </button>
          </Link>
        </div>
        <div className="main-content-bottom">
          <div className="primary-article">
            <img
              src={topArticles.primary.article_img_url}
              className="primary-article-image"
            />
            <div className="primary-bottom-left">
              <h3 className="primary-title">{topArticles.primary.title}</h3>
              <p className="primary-author">{topArticles.primary.author}</p>
            </div>
            <p className="primary-date">
              {convertToDate(topArticles.primary.created_at)}
            </p>
          </div>
          <div className="secondary-articles">
            {topArticles.secondary.map((article) => {
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
    </div>
  );
};
