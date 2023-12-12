import { useEffect, useState } from "react";
import { convertToDate, getProfilePictureByName } from "../utils/functions";

export const CommentContainer = ({ comment }) => {
  const [commentImg, setCommentImg] = useState("");
  const [voteNumber, setVoteNumber] = useState(comment.votes)
  const [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    getProfilePictureByName(comment.author).then((image) => {
      setCommentImg(image);
    });
  }, []);

  const handleVote = () => {
    setIsVoted(!isVoted);
  };

  return (
    <div className="comment-container" key={comment.comment_id}>
      <div className="comment-top-section">
        <img src={commentImg} className="comment-profile-image" />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-date">{convertToDate(comment.created_at)}</p>
      </div>
      <div className="comment-bottom-section">
        <p className="comment-body">{comment.body}</p>
        
      </div>
    </div>
  );
};
