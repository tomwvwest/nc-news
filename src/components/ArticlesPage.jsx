import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {  getArticlesByQuery } from "../utils/api";
import { SecondaryArticleContainer } from "./SecondaryArticleContainer";
import { BackButton } from "./BackButton";
import { capitaliseFirstLetter } from "../utils/functions";

export const ArticlesContainer = () => {
  const [articles, setArticles] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams()
  const topic = searchParams.get('topic')

  useEffect(() => {
    getArticlesByQuery('topic', topic).then((res) => {
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
          <h2 className="content-header articles-content-header">Articles{topic? `: ${capitaliseFirstLetter( topic)}`: null}</h2>
        </div>
        <div className="content-bottom">
          <SecondaryArticleContainer secondaryArticles={articles}/>
        </div>
      </div>
    </div>
  );
};
