import EventEmitter from 'events';
import fs from 'fs';
import _ from 'underscore';

export default class DirWatcher {
    constructor () {
        this.eventEmitter = new EventEmitter();
        this.filesPull = [];
    }

    /**
     *  Watch for a file system with passed path && delay.
     *
     * @param {String} path
     * @param {Number} delay
     */
    watch (path, delay) {
        const files = fs.readdirSync(path);

        if (this.hasFiles(files)) {
            this.updateFilesPullState(files);
            this.processFiles(files);
        } else {
            this.clearFilesPull();
        }

        setTimeout(() => {
            this.watch(path, delay);
        }, delay);
    }

    /**
     * Check if array contains file names
     *
     * @param {Array} files
     * @returns {boolean}
     */
    hasFiles (files) {
        return _.isArray(files) && !_.isEmpty(files);
    }

    /**
     * Compare files pull with current files && update files pull
     *
     * @param {Array} files
     */
    updateFilesPullState (files) {
        if (!_.isEmpty(this.filesPull)) {
            _.map(this.filesPull, (file, key) => {
                if (!_.contains(files, file)) {
                    this.deleteFileFromPull(key);
                }
            });
        }
    }

    /**
     * Clear files pull if files directory is empty
     */
    clearFilesPull () {
        if (!_.isEmpty(this.filesPull)) {
            console.log('Clear files pull.');
            this.filesPull = [];
        }
    }

    /**
     * Delete file from pull with passed key
     *
     * @param {Number} key
     */
    deleteFileFromPull (key) {
        console.log(`Delete file: ${this.filesPull[key]}`);
        this.filesPull.splice(key, 1);
    }

    /**
     * Star process files if directory contains it
     *
     * @param {Array} files
     */
    processFiles (files) {
        _.map(files, (file) => {
            this.addFile(file);
        });
    }

    /**
     * Check for new file $$ add it to pull
     * Emit "changed" event
     *
     * @param {String} file
     */
    addFile (file) {
        const isNewFile = !_.contains(this.filesPull, file);

        if (isNewFile) {
            this.filesPull.push(file);
            console.log(`Add file: ${file}`);

            this.eventEmitter.emit('changed', file);
        }
    }
}
