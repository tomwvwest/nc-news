import { useEffect, useState } from "react";
import { convertToDate, findTopArticles } from "../utils/functions";
import { Link } from "react-router-dom";
import { PrimaryArticleContainer } from "./PrimaryArticleContainer";
import { SecondaryArticleContainer } from "./SecondaryArticleContainer";
import { TopicsButton } from "./TopicsButton";

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
      <div className="main-body">
        <h1 className="isLoading">Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="main-body">
      <div className="content-container">
        <div className="content-top">
          <h2 className="content-header">Trending</h2>
          <TopicsButton />
          <Link to="/articles">
            <button className="view-articles-button button">
              All Articles
            </button>
          </Link>
        </div>
        <div className="content-bottom">
          <PrimaryArticleContainer primaryArticle={topArticles.primary} />
          <SecondaryArticleContainer
            secondaryArticles={topArticles.secondary}
          />
        </div>
      </div>
    </div>
  );
};
