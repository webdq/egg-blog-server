'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/api/users/signup', controller.users.signup);
  router.post('/api/users/signin', controller.users.signin);
  router.get('/api/users/signout', controller.users.signout);

  router.resources('/api/categories', controller.categories);

  router.resources('/api/articles', controller.articles);
  router.get('/api/articles/pv/:id', controller.articles.addPv);
  router.post('/api/articles/comment/:id', controller.articles.addComment);
};
