'use strict';
const path = require('path');

module.exports = function(app) {
  app.route('/')
    .get(function (req,res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
    })
};