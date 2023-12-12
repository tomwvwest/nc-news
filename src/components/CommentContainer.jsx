import { useEffect, useState } from "react";
import { convertToDate, getProfilePictureByName } from "../utils/functions";

export const CommentContainer = ({comment}) => {
 const [commentImg, setCommentImg] = useState('')

  useEffect(() => {
    getProfilePictureByName(comment.author).then(image => {
      setCommentImg(image)
    })
  }, [])

  return (
    <div className="comment-container" key={comment.comment_id}>
      <div className="comment-top-section">
        <img
          src={commentImg}
          className="comment-profile-image"
        />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-date">{convertToDate(comment.created_at)}</p>
      </div>
      <div className="comment-bottom-section">
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};
