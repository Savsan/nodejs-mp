import http from 'http';

http.createServer()
    .on('request', (req, res) => {
        res.writeHeader(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    }).listen(8080);