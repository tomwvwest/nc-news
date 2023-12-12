import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://its-the-news-2.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (id) => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    });
}

export const getCommentsById = (id) => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}

export const getUsers = () => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/users`)
    .then(({ data }) => {
      return data.users;
    });
}

export const getUserByName = (name) => {
  return getUsers().then(users => {
    const chosenUser = users.find(user => user.username === name)
    return chosenUser
  })
}

export const patchArticleVotesById = (id, num) => {
  return axios
    .patch(`https://its-the-news-2.onrender.com/api/articles/${id}`, {inc_votes: num})
    .then(({ data }) => {
      console.log(data);
    });
}