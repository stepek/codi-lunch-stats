'use strict';

const mongoose = require('mongoose');

const FoodProviderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  regex: {
    type: String,
    required: true
  },
  view: {
    list: {
      type: Boolean,
      default: true
    },
    chart: {
      type: Boolean,
      default: true
    },
    default: {
      list: true,
      chart: true
    },
    type: Object
  },
  active:{
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FoodProvider', FoodProviderSchema);
