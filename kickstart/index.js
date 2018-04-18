require('dotenv').config()

const debug = require('debug')('ws-tracker:index')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const socketio = require('socket.io')

const Models = require('./models')

const DEFAUT_PORT = 3000
const DEFAULT_MONGO_URI = 'mongodb://localhost:27017/wsanalytics'

const {
  PORT = DEFAUT_PORT,
  MONGO_URI = DEFAULT_MONGO_URI } = process.env

const initializeMongo = () => {
  const connection = mongoose.connect(MONGO_URI)
  Models.forEach(model => mongoose.model(model.name, model.schema))

  return connection
}

const initializeWS = () => {
  const { Server } = http

  return new Promise((resolve, reject) => {
    const app = express()
    const server = http.Server(app)
    const io = socketio(server)

    app.get('/', (req, res) => res.res.sendFile(__dirname + '/public/index.html'))
    app.get('/main.js', (req, res) => res.res.sendFile(__dirname + '/public/main.js'))

    server.listen(PORT, (error) => {
      if (error) reject(error)
      else resolve()
    })
  })
}

initializeMongo()
  .then(initializeWS)
  .then(() => {
    console.log(`Everything seems ok, ws server started on port ${PORT}`)
    console.log(`Open your browser on http://localhost:${PORT} to launch the interface`)
  })
  .catch(console.error)

