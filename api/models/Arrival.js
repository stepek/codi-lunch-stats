'use strict';

const mongoose = require('mongoose');

const ArrivalSchema = new mongoose.Schema({
  foodProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodProvider',
    required: true
  },
  triggerMessage: {
    type: String
  },
  triggeredBy: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Arrival', ArrivalSchema);
