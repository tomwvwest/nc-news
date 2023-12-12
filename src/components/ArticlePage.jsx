import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsById } from "../utils/api";
import { capitaliseFirstLetter, convertToDate } from "../utils/functions";
import { BackButton } from "./BackButton";
import { CommentsSection } from "./CommentsSection";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isArticleVoted, setIsArticleVoted] = useState(false);

  useEffect(() => {
    getArticleById(articleId)
      .then((data) => {
        setArticle(data);
        return getCommentsById(articleId);
      })
      .then((data) => {
        setComments(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleVote = () => {
    setIsArticleVoted(!isArticleVoted);
  };

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
          <div className="article-votes-section">
            <p className="article-votes">({article.votes})</p>
            <button
              className={`vote-button ${
                isArticleVoted ? "true-vote-button" : "false-vote-button"
              }`}
              onClick={handleVote}
            >
              <img src="../../images/thumbs-up.png" />
            </button>
          </div>
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
          <hr />
          <CommentsSection comments={comments} />
        </div>
      </div>
    </div>
  );
};
