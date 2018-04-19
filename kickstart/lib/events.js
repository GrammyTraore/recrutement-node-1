const Event = require('mongoose').model('events')

function create (user, event) {
  return Event.create({userId: user._id, event: event})
}

module.exports = { create }
