import _ from 'underscore';

export default class ArgvProcessor {
    constructor (args) {
        this.args = args;
        this.helpMessage = 'Help message';
    }

    run () {
        if (this.hasArguments()) {
            this.hasHelper() ? this.showHelp() : this.processArguments();
        }
    }

    hasArguments () {
        const hasArgs = Object.keys(this.args).length > 1;

        if (!hasArgs) {
            console.error(`Error: No one argument were passed.`);
            this.showHelp();
            return false;
        } else {
            return true;
        }
    }

    hasHelper () {
        const firstArg = Object.keys(this.args)[1].match(/[A-Za-z]/g).join('');

        return firstArg === 'help' || firstArg === 'h';
    }

    showHelp (customMessage) {
        const message = customMessage || this.helpMessage;

        console.log(message);
    }

    processArguments () {
        const { action, file } = this.args;
        const argsWithoutKey = this.args._;
        const hasAction = typeof action === 'string' || this[action];

        if (!hasAction) {
            this.showHelp('Action error.');
            this.showHelp();
            return false;
        }

        if (file) {
            this.processCommands(action, file);
        } else if (!file && argsWithoutKey.length) {
            this.processCommands(action, argsWithoutKey);
        } else {
            this.showHelp(`No one arguments weren't passed to '${action}' action.`);
            this.showHelp();
        }
    }

    processCommands (command, args) {
        const isArrayOfArgs = _.isArray(args);

        if (!isArrayOfArgs) {
            if (typeof args === 'string' && args) {
                this[command](args);
            } else {
                this.showHelp(`Wrong argument passed to '${command}' action.`);
                this.showHelp();
            }
        } else {
            _.map(args, (argument) => {
                if (typeof argument === 'string' && argument) {
                    console.log(`Process command ${command} with arg ${argument}`);
                    this[command](argument);
                } else {
                    this.showHelp(`Wrong argument passed to '${command}' action.`);
                    this.showHelp();
                }
            });
        }
    }
}