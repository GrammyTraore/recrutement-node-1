const $ = id => document.getElementById(id)
const $$ = className => Array.from(document.getElementsByClassName(className))
const getLogger = () => $('logger').innerHTML
const log = message => $('logger').innerHTML = `<div>${message}</div>` + getLogger()
const err = message => $('logger').innerHTML = `<div class="error"><span>error</span>${message}</div>` + getLogger()

const socket = io.connect('http://localhost:3000')

socket.on('connect', () => {
  log('connected')
})

socket.on('connect_error', (error) => {
  err('unable to contact ws server')
})

socket.on('error', (error) => {
  err('unable to contact ws server')
  console.error(error)
})

$$('btn').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()

    socket.emit('track', {
      channel: element.innerHTML
    })
  })
})