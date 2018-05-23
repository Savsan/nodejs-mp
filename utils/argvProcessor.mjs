import _ from 'underscore';

export default class ArgvProcessor {
    constructor (args) {
        this.args = args;
        this.actionShortCuts = {
                'r': 'reverse',
                't': 'transform',
                'o': 'outputFile',
                'cf': 'convertFromFile',
                'ct': 'convertToFile',
                'cb': 'cssBundler',
        };
        this.helpMessage = 'Help message';
    }

    run () {
        this.hasHelper() ? this.showHelp() : this.processArguments();
    }

    hasHelper () {
        const firstArg = Object.keys(this.args).length > 1 ?
            Object.keys(this.args)[1].match(/[A-Za-z]/g).join('') :
            null;

        return firstArg === 'help' || firstArg === 'h';
    }

    showHelp (customMessage) {
        const message = customMessage || this.helpMessage;

        console.log(message);
    }

    processArguments () {
        const { action, file, path } = this.args;
        const method = this[action] ? action : this.actionShortCuts[action];
        const argsWithoutKey = this.args._;

        if (!method) {
            console.error('Action error.');
            this.showHelp();
            return false;
        }

        if (file) {
            this.processCommands(method, file);
        } else if (path && method === 'cssBundler') {
            this.processCommands(method, path);
        } else if (!file && (method === 'reverse' || method === 'transform')) {
            this.processCommands(method, argsWithoutKey);
        } else {
            console.error(`No one arguments weren't passed to '${method}' action.`);
            this.showHelp();
        }
    }

    processCommands (action, args) {
        const isArrayOfArgs = _.isArray(args);

        if (!isArrayOfArgs) {
            if (typeof args === 'string' && args) {
                this[action](args);
            } else {
                console.error(`Wrong argument passed to '${action}' action.`);
                this.showHelp();
            }
        } else {
            if (action === 'reverse' || action === 'transform') {
                this[action](...args);
                return;
            }
            _.map(args, (argument) => {
                if (typeof argument === 'string' && argument) {
                    this[action](argument);
                } else {
                    console.error(`Wrong argument passed to '${command}' action.`);
                    this.showHelp();
                }
            });
        }
    }
}