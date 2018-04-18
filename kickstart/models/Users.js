const mongoose = require('mongoose')

const { Schema } = mongoose

module.exports = new Schema({
  uid: {
    type: String,
    index: true
  },
  online: {
    type: Boolean,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
