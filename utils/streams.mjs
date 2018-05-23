import ArgvProcessor from './argvProcessor';
import minimist from 'minimist';
import fs from 'fs';
import fsPromises from 'fs/promises';
import through2 from 'through2';
import csvjson from 'csvjson';

const argv = minimist(process.argv.slice(2), {
    alias: {
        'action': 'a',
        'file': 'f',
        'path': 'p',
        'reverse': 'r',
        'transform': 't',
        'outputFile': 'o',
        'convertFromFile': 'cf',
        'convertToFile': 'ct',
        'cssBundler': 'cb',
        'help': 'h'
    }
});

class Streams extends ArgvProcessor {
    reverse (str) {
        process.stdin.on('data', (chunk) => {
            process.stdout.write(chunk.toString().split('').reverse().join('') + '\r\n');
        });
    }

    transform (str) {
        const stream = through2(this.write, this.end);

        process.stdin.pipe(stream).pipe(process.stdout);
    }

    write (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }

    end (done) {
        done();
    }

    isCsvFile (fileName) {
        const csvRegExp = new RegExp(/(\d|\w|\S+).csv/g);

        return csvRegExp.test(fileName);
    }

    outputFile (filePath) {
        const reader = fs.createReadStream(filePath);

        reader.pipe(process.stdout);
    }

    convertFromFile (filePath) {
        const file = filePath.split('/').pop();
        const toObject = csvjson.stream.toObject();
        const stringify = csvjson.stream.stringify();
        let reader;

        if (this.isCsvFile(file)) {
            try {
                reader = fs.createReadStream(filePath);

                reader.pipe(toObject).pipe(stringify).pipe(process.stdout);
            } catch (e) {
                console.error(e);
            }
        }
    }

    convertToFile (filePath) {
        const file = filePath.split('/').pop();
        const toObject = csvjson.stream.toObject();
        const stringify = csvjson.stream.stringify();
        let reader, writer;

        if (this.isCsvFile(file)) {
            try {
                reader = fs.createReadStream(filePath);
                writer = fs.createWriteStream(`${filePath.slice(0, -3)}json`);

                reader.pipe(toObject).pipe(stringify).pipe(writer);
            } catch (e) {
                console.error(e);
            }
        }
    }

    async cssBundler (filePath) {
        const paths = await fsPromises.readdir(filePath);
        const bundlePath = `${filePath}/bundle.css`;
        const remoteResourcePath = `${filePath}/nodejs-homework3.css`;
        const cssPaths = paths.filter(
            path => path.slice(-3) === 'css' && path !== 'bundle.css' && path !== 'nodejs-homework3.css'
        ).map(path => `${filePath}/${path}`);
        const writeStream = fs.createWriteStream(bundlePath);
        const readStream = fs.createReadStream(remoteResourcePath);

        cssPaths.forEach(path => fs.createReadStream(path).pipe(writeStream));
        readStream.on('data', (chunk) => {
            fs.appendFile(bundlePath, chunk.toString(), function () {});
        });
    }
}

const streams = new Streams(argv);

streams.run();