import { useState } from "react";
import { CommentContainer } from "./CommentContainer";

export const CommentsSection = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleDropDown = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <h3 className="comments-title">
        Comments ({comments.length}){" "}
        {comments.length?<img
          src="../../images/back-arrow.png"
          className={`comments-drop-down ${showComments? 'show-comments': 'hide-comments'}`}
          onClick={handleDropDown}
        />: <p className="no-comments-message">No comments</p>}
        
      </h3>
      {showComments? <div className="comments-section">
        {comments.map((comment) => {
          return <CommentContainer comment={comment} />;
        })}
      </div> : null}
    </>
  );
};
