'use strict';

module.exports = function(app) {
  const eventsList = require('../controllers/event');

  app.route('/events')
    .get(eventsList.list)
    .post(eventsList.create);
};