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
  const [error, setError] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(null)

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
    if(!addComment){
      setError('Please write a comment');
      setIsPosted(null)
      setIsLoadingSend(null)
    } else{
      setIsPosted(null);
      setError(null)
      setIsLoadingSend('Posting...');

      postComment(currentArticleId, user, addComment).then((addedComment) => {
        setComments([addedComment.comment, ...comments]);
        setIsLoadingSend(null)
        setError(null);
        setIsPosted(true);
      }).catch(() => {
        setIsLoadingSend(null)
        setIsPosted(null);
        setError('Error: please try again')
      });
      setAddComment("");
    }
    
  };

  return (
    <div className="comment-container add-comment-container">
      <div className="add-comment-container-top">
        <img
          src={addCommentImg}
          className="comment-profile-image add-comment-profile-image"
        />
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
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
      <div className="add-comment-container-bottom">
        <p className="comment-posted">{isPosted ? "Comment posted" : null}</p>
        <p className="error-posted">{error ? error : null}</p>
        <p>{isLoadingSend ? isLoadingSend : null}</p>
      </div>
    </div>
  );
};
