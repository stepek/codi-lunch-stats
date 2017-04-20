'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EventSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  triggeredBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Events', EventSchema);
