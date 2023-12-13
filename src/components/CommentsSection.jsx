import { useState } from "react";
import { CommentContainer } from "./CommentContainer";
import { AddComment } from "./AddComment";

export const CommentsSection = ({ comments, setComments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleDropDown = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <h3 className="comments-title">
        Comments ({comments.length}){" "}
        {comments.length ? (
          <img
            src="../../images/back-arrow.png"
            className={`comments-drop-down ${
              showComments ? "show-comments" : "hide-comments"
            }`}
            onClick={handleDropDown}
          />
        ) : (
          <>
            <p className="no-comments-message">No comments</p>
          </>
        )}
      </h3>
        {!comments.length ? <AddComment comments={comments} setComments={setComments} /> : null}
      {showComments ? (
        <div className="comments-section">
          <AddComment comments={comments} setComments={setComments} />
          {comments.map((comment) => {
            return (
              <div key={comment.comment_id} className="comment-container">
                <CommentContainer commentData={comment} />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
