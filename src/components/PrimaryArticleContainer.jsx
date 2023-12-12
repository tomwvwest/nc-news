import { convertToDate } from "../utils/functions";

export const PrimaryArticleContainer = ({primaryArticle}) => {
  return (
    <div className="primary-article">
      <img
        src={primaryArticle.article_img_url}
        className="primary-article-image"
      />
      <div className="primary-bottom-left">
        <h3 className="primary-title">{primaryArticle.title}</h3>
        <p className="primary-author">{primaryArticle.author}</p>
      </div>
      <p className="primary-date">
        {convertToDate(primaryArticle.created_at)}
      </p>
    </div>
  );
};
