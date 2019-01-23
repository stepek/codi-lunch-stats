'use strict';

const mongoose = require('mongoose');
const FoodProvider = mongoose.model('FoodProvider');

exports.create = function(req, res) {
  const newFoodProvider = new FoodProvider(req.body);

  newFoodProvider.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list = function(req, res) {
  FoodProvider.find(req.query, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get = function (req, res) {
  FoodProvider.findOne({_id: req.params.id}, function (err, item) {
    if (err) {
      res.send(err);
    }
    res.json(item)
  })
};

exports.delete = function (req, res) {
  FoodProvider.deleteOne({_id: req.params.id},function(err) {
    if (err) {
      res.send(err)
    }
    res.send("ok")
  })
};

exports.update = function (req, res) {
  FoodProvider.findOneAndUpdate({ _id: req.params.id }, { $set: req.body}, function(err, item) {
    if (err) {
      res.send(err)
    }
    res.json(item)
  })
};
