'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const mongolabUri = process.env.MONGOLAB_URI || 'mongodb://localhost/codi-lunch-stats';

const mongoose = require('mongoose');

require('./api/models/FoodProvider');
require('./api/models/Arrival');

const bodyParser = require('body-parser');
const queryParser = require('express-query-parser');

mongoose.Promise = global.Promise;
mongoose.connect(mongolabUri, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(queryParser({
  parseNull: true,
  parseBoolean: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const foodProvider = require('./api/routers/foodProvider');
const arrival = require('./api/routers/arrival');
const viewRouters = require('./view/routers/home');

foodProvider(app);
arrival(app);

viewRouters(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
