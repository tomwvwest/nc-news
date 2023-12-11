import { getArticles } from "./api"

export const findTopArticles = () => {
  return getArticles().then((res)=> {
    const topArticles = {};
    const orderedArticles = res.sort((a,b) => b.comment_count - a.comment_count)

    topArticles.primary = orderedArticles[0]
    topArticles.secondary = orderedArticles.slice(1,6)

    return topArticles
  })
}

export const convertToDate = (str) => {
  return `${str.slice(8,10)}/${str.slice(5,7)}`
}