import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { getUserByName } from "../utils/api";

export const Header = () => {
  const {user} = useContext(UserContext)
  const [profileImg, setProfileImg] = useState('')
  
  useEffect(() => {
    getUserByName(user).then((user) => setProfileImg(user.avatar_url))
  })

  return (
      <div className="header-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="header-logo">
            TTN <span className="sub-header">- That's the News</span>
          </h1>
        </Link>
        <div className="header-img-container">
          <img src={profileImg} className="header-img"/>
        </div>
      </div>
  );
};
