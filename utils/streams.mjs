import ArgvProcessor from './argvProcessor';
import minimist from "minimist";

const argv = minimist(process.argv.slice(2), {
    alias: {
        'action': 'a',
        'file': 'f',
        'reverse': 'r',
        'transform': 't',
        'outputFile': 'o',
        'convertFromFile': 'cf',
        'convertToFile': 'ct',
        'help': 'h'
    }
});

class Streams extends ArgvProcessor {
    reverse (str) {
        console.log(`reverse: ${str}`);
    }

    transform (str) {
        console.log(`transform: ${str}`);
    }

    outputFile (filePath) {
        console.log(`outputFile: ${filePath}`);
    }

    convertFromFile (filePath) {
        console.log(`convertFromFile: ${filePath}`);
    }

    convertToFile (filePath) {
        console.log(`convertToFile: ${filePath}`);
    }

    cssBundler () {

    }
}

const streams = new Streams(argv);

streams.run();