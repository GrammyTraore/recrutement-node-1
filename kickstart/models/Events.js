const mongoose = require('mongoose')

const { Schema } = mongoose

module.exports = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    index: true
  },
  event: {
    type: String,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
