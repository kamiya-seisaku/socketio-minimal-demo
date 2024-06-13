// gemini ver helloworld worked.  express also worked.
// it is not port 3000 vs 8080.  even with 3000 below wasn't working
// is it that below server isn't serving /index.html instead /app/index.html?
// lets go back to the original and see if /app/index.html is served

// ---gemini ver working helloworld---
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello World!');
// });
// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

const http = require('http').createServer();

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

http.listen(8080, () => console.log('listening on http://localhost:8080') );

// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });


 
