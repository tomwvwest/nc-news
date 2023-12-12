import { convertToDate } from "../utils/functions";

export const SecondaryArticleContainer = ({ secondaryArticles }) => {
  return (
    <div className="secondary-articles">
      {secondaryArticles.map((article) => {
        return (
          <div className="secondary-article" key={article.article_id}>
            <div className="secondary-left-side">
              <img
                src={article.article_img_url}
                className="secondary-article-image"
              />
            </div>
            <div className="secondary-right-side">
              <p className="secondary-title">{article.title}</p>
              <p className="secondary-author">{article.author}</p>
              <p className="secondary-date">
                {convertToDate(article.created_at)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
