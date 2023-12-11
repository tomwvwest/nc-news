import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 className="header-logo">
        TTN <span className="sub-header">- That's the News</span>
      </h1>
      </Link>
      <div className="header-img-container">Img</div>
    </div>
  );
};
