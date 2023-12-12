import { useNavigate } from "react-router";
import { getArticles, getUsers } from "./api";

export const findTopArticles = () => {
  return getArticles().then((res) => {
    const topArticles = {};
    const orderedArticles = res.sort(
      (a, b) => b.comment_count - a.comment_count
    );

    topArticles.primary = orderedArticles[0];
    topArticles.secondary = orderedArticles.slice(1, 6);

    return topArticles;
  });
};

export const convertToDate = (str) => {
  return `${str.slice(8, 10)}/${str.slice(5, 7)}`;
};

export const capitaliseFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getProfilePictureByName = (name) => {
  return getUsers().then(users => {
    const chosenUser = users.find(user => user.username === name)
    return chosenUser.avatar_url
  })
}

