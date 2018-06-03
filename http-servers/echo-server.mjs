import http from 'http';

http.createServer()
    .on('connection', (socket) => {
        socket.on('data', (data) => {
            console.log(data.toString());
        });
        socket.pipe(socket);
    }).listen(8080);