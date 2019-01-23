'use strict';

module.exports = function(app) {
  const foodProvider = require('../controllers/foodProvider');

  app.route('/foodProviders')
    .get(foodProvider.list)
    .post(foodProvider.create);

  app.route('/foodProviders/:id')
    .get(foodProvider.get)
    .put(foodProvider.update)
    .delete(foodProvider.delete);
};
