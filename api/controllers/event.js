'use strict';

const types = require('./../models/types').defalut;
const mongoose = require('mongoose');
const EventModel = mongoose.model('Events');

const tudel = /^[(\@all)(@here)].*[Tt]udel$/;
const rollo = /^[(\@all)(@here)].*[Rr]ollo$/;
const slimak = /^[(\@all)(@here)].*[SsŚś]limak$/;
const sushi = /^[(\@all)(@here)].*[Ss]ushi$/;
const flanders = /^[(\@all)(@here)].*[Ff]landers$/;
const doSyta = /^[(\@all)(@here)].*[Ss]yta?$/;
const qchnia = /^[(\@all)(@here)].*[Qq]chnia$/;


exports.list = function(req, res) {
  EventModel.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  const {body} = req;
  const msg = body.text.trim();

  const newData = {
    timestamp: body.timestamp,
    triggeredBy: body.user_name
  };

  if (tudel.test(msg)) {
    newData.type = types.tudel;

  } else if (rollo.test(msg)) {
    newData.type = types.rollo;

  } else if (slimak.test(msg)) {
    newData.type = types.slimak;

  } else if (sushi.test(msg)) {
    newData.type = types.sushi;

  } else if (flanders.test(msg)) {
    newData.type = types.flanders;

  } else if (doSyta.test(msg)) {
    newData.type = types.doSyta;
  } else if (qchnia.test(msg)) {
    newData.type = types.qchnia;
  } else {
    res.send('fail');
    return;
  }

  const newEvent = new EventModel(newData);

  newEvent.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
