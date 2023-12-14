import { useEffect, useState } from "react";
import { BackButton } from "./BackButton";
import { TopicsContainer } from "./TopicsContainer";
import { getTopics } from "../utils/api";

export const TopicsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState("");

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
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
          <BackButton />
          <h2 className="content-header articles-content-header">Topics</h2>
        </div>
        <div className="content-bottom">
          <TopicsContainer topics={topics}/>
        </div>
      </div>
    </div>
  );
};
