import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://its-the-news-2.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
export const getArticlesByQuery = (query, value) => {
  if (value && query) {
    return axios
      .get(`https://its-the-news-2.onrender.com/api/articles?${query}=${value}`)
      .then(({ data }) => {
        return data.articles;
      });
  } else {
    return axios
      .get("https://its-the-news-2.onrender.com/api/articles")
      .then(({ data }) => {
        return data.articles;
      });
  }
};

export const getArticleById = (id) => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const getCommentsById = (id) => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getUsers = () => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/users`)
    .then(({ data }) => {
      return data.users;
    });
};

export const getUserByName = (name) => {
  return getUsers().then((users) => {
    const chosenUser = users.find((user) => user.username === name);
    return chosenUser;
  });
};

export const patchArticleVotesById = (id, num) => {
  return axios
    .patch(`https://its-the-news-2.onrender.com/api/articles/${id}`, {
      inc_votes: num,
    })
    .then(({ data }) => {
      console.log(data);
    });
};

export const postComment = (id, username, body) => {
  return axios
    .post(`https://its-the-news-2.onrender.com/api/articles/${id}/comments`, {
      username,
      body,
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const deleteCommentById = (id) => {
  return axios
    .delete(`https://its-the-news-2.onrender.com/api/comments/${id}`)
    .then((res) => {
      console.log(res);
    });
};

export const getTopics = () => {
  return axios
    .get(`https://its-the-news-2.onrender.com/api/topics`)
    .then(({ data }) => {
      return data.topics;
    });
};
