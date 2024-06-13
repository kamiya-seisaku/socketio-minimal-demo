const express = require('express')
const app = express()
const port = 3000

const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Hello World!');
// });

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// -----------------------------
// socket.io part
const io = require('socket.io')(http, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) =>     {
      console.log(message);
      io.emit('message', `${socket.id.substr(0,2)} said ${message}` );   
  });
});

// http.listen(8080, () => console.log('listening on http://localhost:8080') );

// -----------------------------



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})