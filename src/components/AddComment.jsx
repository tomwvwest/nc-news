import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getProfilePictureByName } from "../utils/functions";
import { postComment } from "../utils/api";
import { useParams } from "react-router";

export const AddComment = ({ comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [addCommentImg, setAddCommentImg] = useState("");
  const [addComment, setAddComment] = useState("");
  const [currentArticleId, setCurrentArticleId] = useState("");
  const { articleId } = useParams();

  useEffect(() => {
    getProfilePictureByName(user).then((image) => {
      setAddCommentImg(image);
      setCurrentArticleId(articleId);
    });
  }, []);

  const updateComment = (e) => {
    setAddComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(currentArticleId, user, addComment).then((returnComment) => {
      setComments([returnComment.comment, ...comments]);
    });
    setAddComment("");
  };

  return (
    <div className="comment-container add-comment-container">
      <img src={addCommentImg} className="comment-profile-image add-comment-profile-image" />
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          onChange={updateComment}
          value={addComment}
        />
        <button className="send-comment-button">
          <img
            src="../../images/back-arrow.png"
            className="send-comment-arrow"
          />
        </button>
      </form>
    </div>
  );
};
