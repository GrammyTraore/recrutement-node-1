const User = require('mongoose').model('users')

function create (id, online) {
  return User.create({uid: id, online: true})
}

function disconnect (user) {
  return user.update({online: false})
}

module.exports = { create, disconnect }
