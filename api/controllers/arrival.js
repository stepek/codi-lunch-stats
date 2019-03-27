'use strict';

const moment = require('moment');
const mongoose = require('mongoose');
const Arrival = mongoose.model('Arrival');
const FoodProvider = mongoose.model('FoodProvider');

exports.create = function(req, res) {
  FoodProvider.find({active: true}, 'regex',  function(err, providers) {
    if (err) {
      res.send(err);
    }

    const modelsToSave = providers
      .filter(function(item) {
        return RegExp(item.regex).test(req.body.text);
      })
      .map(function(item) {

        return Object.assign({}, {
          triggerMessage: req.body.text,
          triggeredBy: req.body.user_name,
          timestamp: req.body.timestamp,
          foodProvider: item._id,
        });
      });

    Arrival.insertMany(modelsToSave, function(err, data) {
      if (err)
        res.send(err);
      res.json(data);
    })
  });
};

exports.list = function(req, res) {
  Arrival
    .find(req.query)
    .populate('foodProvider', 'title view')
    .exec(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
};

exports.chart = function(req, res) {
  const lte = req.query.lte;

  FoodProvider
    .find({
      active: true,
      'view.chart': true,
      timestamp: lte ? {$lte: lte} : undefined
    }, '_id title')
    .exec(function(err, providers) {
      Arrival
        .find({foodProvider: {$in: providers}})
        .sort({timestamp: 1})
        .exec(function(err, task) {
          if (err)
            res.send(err);

          res.json({
            data: parseData(task),
            legend: parseLegend(providers),
          });
        });
    });
};

exports.get = function (req, res) {
  Arrival
    .findOne({_id: req.params.id})
    .exec(function (err, item) {
      if (err) {
        res.send(err);
      }
      res.json(item)
    })
};

exports.delete = function (req, res) {
  Arrival
    .deleteOne({_id: req.params.id})
    .exec(function(err) {
      if (err) {
        res.send(err)
      }
      res.send("ok")
    })
};

exports.update = function (req, res) {
  Arrival
    .findOneAndUpdate({ _id: req.params.id }, { $set: req.body})
    .exec(function(err, item) {
      if (err) {
        res.send(err)
      }
      res.json(item)
    })
};

function getTime(timestamp) {
  const time = moment(timestamp);
  return time.milliseconds() + time.seconds() * 1000 + time.minutes() * 60 * 1000 + time.hours() * 60 * 60 * 1000
}

function parseData(data) {
  return data.reduce(function(result, item) {
    const date = moment(item.timestamp).valueOf() - getTime(item.timestamp);
    const time = getTime(item.timestamp);
    const existingRow = result.find(function(item){
      return item.date === date;
    });

    if (existingRow !== undefined) {
      existingRow[item.foodProvider] = time;
    } else {
      result.push({
        date,
        [item.foodProvider]: time
      });
    }

    return result;
  }, [])
}

function parseLegend(providers) {
  return providers.reduce(function(result, item) {
    result[item.id] = item.title;

    return result;
  }, {})
}
