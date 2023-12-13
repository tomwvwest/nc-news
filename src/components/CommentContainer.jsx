import { useEffect, useState } from "react";
import { convertToDate, getProfilePictureByName } from "../utils/functions";
import { Link } from "react-router-dom";

export const CommentContainer = ({ commentData }) => {
  const [commentImg, setCommentImg] = useState("");
  const [comment, setComment] = useState(commentData)
  const [voteNumber, setVoteNumber] = useState(comment.votes);
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    getProfilePictureByName(comment.author).then((image) => {
      setCommentImg(image);
    });
  }, []);

  const handleVote = () => {
    setIsVoted(!isVoted);
    const incrementBy = isVoted ? -1 : 1;
    setVoteNumber((current) => current + incrementBy)
  };

  return (
    <>
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
    </>
  );
};
