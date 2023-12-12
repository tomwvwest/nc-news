import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUserByName } from "../utils/api";
import { BackButton } from "./BackButton";

export const ProfilePage = () => {
  const [profile, setProfile] = useState("");
  const { username } = useParams();

  useEffect(() => {
    getUserByName(username).then((profileData) => {
      setProfile(profileData);
    });
  }, []);

  return (
    <div className="main-body">
      <div className="content-container profile-content-container">
        <div className="content-top">
          <BackButton />
        </div>
        <h2 className="content-header profile-content-header">{username}</h2>
        <img src={profile.avatar_url} className="profile-image" />
        <p className="profile-sub-header">Profile</p>
      </div>
    </div>
  );
};
