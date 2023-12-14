import { Link } from "react-router-dom";

export const TopicsButton = () => {
  return (
    <Link to="/topics">
      <button className="topics-button button">Browse Topics</button>
    </Link>
  );
};
