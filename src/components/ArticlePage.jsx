import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsById,
  patchArticleVotesById,
} from "../utils/api";
import { capitaliseFirstLetter, convertToDate } from "../utils/functions";
import { BackButton } from "./BackButton";
import { CommentsSection } from "./CommentsSection";
import { ErrorPage } from "./ErrorPage";

export const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isArticleVoted, setIsArticleVoted] = useState(false);
  const [articleVotes, setArticleVotes] = useState("");
  const [err, setErr] = useState(null);
  const[urlError, setUrlError] = useState(null)

  useEffect(() => {
    getArticleById(articleId)
      .then((article) => {
        setArticle(article);
        setArticleVotes(article.votes);
        return getCommentsById(articleId);
      })
      .then((data) => {
        setComments(data);
      })
      .then(() => setIsLoading(false)).catch(err => {
        setIsLoading(false)
        setUrlError(true)
      });
  }, []);

  const handleVote = () => {
    setIsArticleVoted(!isArticleVoted);
    const incrementBy = isArticleVoted ? -1 : 1;
    setArticleVotes((current) => current + incrementBy);

    patchArticleVotesById(article.article_id, incrementBy)
      .then(() => {
        return getArticleById(article.article_id);
      })
      .then((updatedArticle) => setArticleVotes(updatedArticle.votes))
      .catch((resErr) => setErr(resErr));
  };

  if (isLoading) {
    return (
      <div className="main-body">
        <h1 className="isLoading">Loading ...</h1>
      </div>
    );
  }

  if (urlError) {
    return <ErrorPage/>
  }

  return (
    <div className="main-body">
      <div className="content-container">
        <div className="content-top">
          <BackButton />
          <div className="article-votes-section">
            <p className="article-votes">
              {err ? "ERROR" : `(${articleVotes})`}
            </p>
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
          <CommentsSection comments={comments} setComments={setComments}/>
        </div>
      </div>
    </div>
  );
};
