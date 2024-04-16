const http = require('http')

// STARI SETUP  
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// NOVI SETUP
// Using Event Emitter API
const server = http.createServer()
// emits request event -> mozemo se uvjeriti da salje tocno 'request' u node.js dokumentaciji 
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)