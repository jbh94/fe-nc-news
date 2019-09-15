import axios from 'axios';

const request = axios.create({
  baseURL: 'https://joeh-nc-news.herokuapp.com/api'
});

export const getArticles = uniqueURL => {
  const URL = `/${uniqueURL}`;
  return request.get(URL).then(({ data }) => {
    return data;
  });
};
