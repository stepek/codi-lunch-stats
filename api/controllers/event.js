'use strict';

const mongoose = require('mongoose');
const EventModel = mongoose.model('Events');

exports.list = function(req, res) {
  EventModel.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  const {body} = req;
  const newData = {
    type: body.trigger_word,
    timestamp: body.timestamp,
    triggeredBy: body.user_name
  };
  const newEvent = new EventModel(newData);

  newEvent.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
