import http from 'http';
import fs from 'fs';
import through2 from 'through2';

const filePath = 'http-servers/src/index.html';

http.createServer()
    .on('request', (req, res) => {
        const data = fs.readFileSync(filePath, 'utf8');
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(data.replace('{message}', '<h1>Hello from NodeJS http server!!! This data was read via fs.readFileSync.</h1>'));
    }).listen(8080);

http.createServer()
    .on('request', (req, res) => {
        const readStream = fs.createReadStream(filePath);
        const replaceMessage = through2(function(chunk, enc, callback) {
            this.push(chunk.toString().replace('{message}', '<h1>Hello from NodeJS http server!!! This data was read via fs.createReadStream.</h1>'));
            callback();
        });
        res.writeHeader(200, {'Content-Type': 'text/html'});
        readStream.pipe(replaceMessage).pipe(res);
    }).listen(8081);
