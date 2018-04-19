const debug = require('debug')('ws-handler')
const users = require('../lib/user')
const events = require('../lib/events')

function handleSocket (socket) {
  debug('User connected:', socket.id)
  users.create(socket.id, true).then(user => {
    debug('User saved and is online:', user.uid)

    socket.on('disconnect', () => {
      users.disconnect(user).then(() => {
        debug('User disconnected:', user.uid)
      }).catch(console.error)
    })

    socket.on('track', event => {
      debug('Event arrived:', event.channel, user.uid)
      events.create(user, event.channel).then(() => debug('Event saved:', event.channel, user.uid)).catch(console.error)
    })
  }).catch(console.error)
}

module.exports = handleSocket
