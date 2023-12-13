import { useContext, useEffect, useState } from "react";
import { convertToDate, getProfilePictureByName } from "../utils/functions";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../utils/api";

export const CommentContainer = ({ commentData, setComments }) => {
  const { user } = useContext(UserContext);
  const [commentImg, setCommentImg] = useState("");
  const [comment, setComment] = useState(commentData);
  const [voteNumber, setVoteNumber] = useState(commentData.votes);
  const [isVoted, setIsVoted] = useState(false);

  const [error, setError] = useState("");
  const [isLoadingDel, setIsLoadingDel] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    getProfilePictureByName(comment.author).then((image) => {
      setCommentImg(image);
    });
  }, []);

  const handleVote = () => {
    setIsVoted(!isVoted);
    const incrementBy = isVoted ? -1 : 1;
    setVoteNumber((current) => current + incrementBy);
  };

  const handleCommentDelete = () => {
    setIsLoadingDel("Deleting comment...");
    deleteCommentById(comment.comment_id)
      .then(() => {
        setError(null);
        setTimeout(() => {
          setIsDeleted("Successfully deleted");
          setIsLoadingDel(null);
          setComment(isDeleted);
        }, 1000);
        setTimeout(() => {
          setIsDeleted(true)
        }, 3000)
      })
      .catch(() => {
        setIsLoadingDel(null);
        setIsDeleted(null);
        setError("Error: please try again");
      });
  };

  if (isDeleted === "Successfully deleted") {
    return (
      <div className="comment-container">
        <p className="delete-loading successful-delete-loading">{isDeleted}</p>
      </div>
    );
  } else if (isDeleted) {
    return;
  }

  return (
    <div className="comment-container">
      <div className="comment-top-section">
        <Link to={`/profile/${comment.author}`}>
          <img src={commentImg} className="comment-profile-image" />
        </Link>
        <p className="comment-author">{comment.author}</p>
        <p className="comment-date">{convertToDate(comment.created_at)}</p>
      </div>
      <div className="comment-bottom-section">
        <p className="comment-body">{comment.body}</p>
      </div>
      <div className="comment-votes-section">
        <div className="comment-votes-left">
          <button
            className={`vote-button comment-vote-button ${
              isVoted ? "true-vote-button" : "false-vote-button"
            }`}
            onClick={handleVote}
          >
            <img
              src="../../images/thumbs-up.png"
              className={`thumbs-up ${
                isVoted ? "true-thumbs-up" : "false-thumbs-up"
              }`}
            />
          </button>
          <p className="comment-votes">({voteNumber})</p>
        </div>
        {comment.author === user ? (
          <button
            className="vote-button delete-button"
            onClick={handleCommentDelete}
          >
            <img src="../../images/delete.png" className="delete-icon" />
          </button>
        ) : null}
      </div>
      <p className="error-posted">{error ? error : null}</p>
      <p className="delete-loading">{isLoadingDel ? isLoadingDel : null}</p>
    </div>
  );
};
