import { Link } from "react-router-dom";
import { capitaliseFirstLetter } from "../utils/functions";

export const TopicContainer = ({ topic }) => {
  return (
      <Link to={`/articles?topic=${topic.slug}`}>
        <img
          src={`../images/${topic.slug}-topic.jpeg`}
          className="topic-image"
        />
        <h2 className="topic-header">{capitaliseFirstLetter(topic.slug)}</h2>
        <p className="topic-description">{topic.description}</p>
      </Link>
  );
};
