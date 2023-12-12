import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { convertToDate } from "../utils/functions";
import { SecondaryArticleContainer } from "./SecondaryArticleContainer";
import { BackButton } from "./BackButton";

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
          <h2 className="content-header articles-content-header">Articles</h2>
        </div>
        <div className="main-content-bottom">
          <SecondaryArticleContainer secondaryArticles={articles}/>
        </div>
      </div>
    </div>
  );
};
