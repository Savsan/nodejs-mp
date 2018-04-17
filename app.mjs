import { DirWatcher, Importer } from './modules';
import csvjson from "csvjson";

const dirwatcher = new DirWatcher();
const importer = new Importer(dirwatcher.eventEmitter);

// Import async
importer.import('mocks-data.csv')
    .then(function (data) {
        console.log(csvjson.toObject(data));
        console.log('ASYNC IMPORT COMPLETED.');
    });

dirwatcher.watch('./data', 1000);
