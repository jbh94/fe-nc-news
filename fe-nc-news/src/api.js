import axios from 'axios';

const request = axios.create({
  baseURL: 'https://joeh-nc-news.herokuapp.com/api'
});

export const getArticles = queries => {
  return request
    .get('/articles', { params: queries })
    .then(({ data: articles }) => {
      return articles;
    });
};

export const getArticlesWithParams = (topic, sort_by, order) => {
  return request
    .get('/articles', {
      params: {
        sort_by: sort_by,
        order: order,
        topic: topic
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopicsFromArticles = slug => {
  return request.get(`/articles?topic=${slug}`).then(({ data: articles }) => {
    return articles;
  });
};

export const getArticle = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data: article }) => {
    return article;
  });
};

export const getTopics = () => {
  return request.get('/topics').then(({ data: topics }) => {
    return topics;
  });
};

export const getComments = article_id => {
  return request
    .get(`/articles/${article_id}/comments`)
    .then(({ data: comments }) => {
      return comments;
    });
};

export const patchCommentVotes = (comment_id, inc_votes) => {
  return request.patch(`/comments/${comment_id}`, { inc_votes });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return request.patch(`/articles/${article_id}`, { inc_votes });
};

export const postComment = (article_id, comment) => {
  return request
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return request
    .delete(`/comments/${comment_id}`, { comment_id })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getUser = username => {
  return request.get(`/users/${username}`).then(({ data: user }) => {
    return user;
  });
};

// ASYNC/AWAIT METHOD

// export const getArticles = async () => {
//   const { data } = await request.get('/articles')
//   return data.articles
// }
