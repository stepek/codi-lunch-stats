'use strict';
const path = require('path');

module.exports = function(app) {
  app.route('/*')
    .get(function (req,res) {
      var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
      res.sendfile(path, {root: './webui/build/'});
    })
};
