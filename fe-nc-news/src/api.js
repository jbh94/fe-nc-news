import axios from 'axios';

const request = axios.create({
  baseURL: 'https://joeh-nc-news.herokuapp.com/api'
});

export const getArticles = () => {
  return request.get('/articles').then(({ data: articles }) => {
    return articles;
  });
};

export const getArticle = article_id => {
  console.log(article_id, 'api id');
  return request.get(`/articles/${article_id}`).then(({ data: article }) => {
    return article;
  });
};

export const getTopics = () => {
  return request.get('/topics').then(({ data: topics }) => {
    return topics;
  });
};

// ASYNC/AWAIT METHOD

// export const getArticles = async () => {
//   const { data } = await request.get('/articles')
//   return data.articles
// }
