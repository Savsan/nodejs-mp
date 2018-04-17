import fs from 'fs';
import util from 'util';
import csvjson from 'csvjson';

const readFileAsync = util.promisify(fs.readFile);

export default class Importer {
    constructor (eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.eventEmitter.on('changed', this.importSync);
    }

    /**
     * Sync file import
     *
     * @param file
     */
    importSync (file) {
        console.log('START SYNC IMPORT');
        console.log(csvjson.toObject(fs.readFileSync(`./data/${file}`, 'utf8')));
        console.log('SYNC IMPORT COMPLETED');
    }

    /**
     * Async file import
     *
     * @param file
     * @returns {Promise<*>}
     */
    async import (file) {
        try {
            console.log('START ASYNC IMPORT');
            return await readFileAsync(`./data/${file}`, 'utf8');
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
