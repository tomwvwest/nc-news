import { CommentContainer } from "./CommentContainer";

export const CommentsSection = ({ comments }) => {
  return (
    <>
      <h3 className="comments-title">Comments</h3>
      <div className="comments-section">
        {comments.map((comment) => {
          return <CommentContainer comment={comment} />;
        })}
      </div>
    </>
  );
};
