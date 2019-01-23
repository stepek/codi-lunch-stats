'use strict';

module.exports = function(app) {
  const arrival = require('../controllers/arrival');

  app.route('/arrivals')
    .get(arrival.list)
    .post(arrival.create);

  app.route('/arrivals/chart')
    .get(arrival.chart)

  app.route('/arrivals/:id')
    .get(arrival.get)
    .put(arrival.update)
    .delete(arrival.delete);
};
