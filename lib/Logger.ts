import path from 'path';

// console output colors
enum COLORS {
    NONE = '\x1b[49m\x1b[0m',
    RED = '\x1b[49m\x1b[31m',
    YELLOW = '\x1b[49m\x1b[35m',
    BLUE = '\x1b[49m\x1b[36m',
    MAGENTA = '\x1b[49m\x1b[35m',
    WHITE_ON_RED = '\x1b[41m\x1b[37m',
    RED_UNDERLINE = '\x1b[4m\x1b[37m'

}

export enum LOG_LEVELS { 
    NONE = 0, 
    ERROR,
    WARN,
    INFO,
    DEBUG,
    TRACE
}

export class Logger {

    private static instance: Logger;

    private logLevel: LOG_LEVELS = LOG_LEVELS.INFO;

    // must use getInstance()
    private constructor() { }

    // singleton instance pattern
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setLogLevel(level: LOG_LEVELS) {
        this.logLevel = level;
        let method = 'setLogLevel';
        console.log('%s%s : %s : %s : %s : Log Level set to %s%s', COLORS.NONE, getTimeStamp(), 'N/A', fileName(__filename), method, this.logLevel, COLORS.NONE);
    }
    
    public debug(file: string, method: string, message: string) {
        if (this.logLevel >= LOG_LEVELS.DEBUG) {
            console.log('%s%s : %s : %s' + (method == '' ? '' : ' : ') + '%s : %s%s', COLORS.BLUE, getTimeStamp(), 'DEBUG', fileName(file), method, message, COLORS.NONE);
        }
    }
    
    public error(file: string, method: string, message: string) {
        if (this.logLevel >= LOG_LEVELS.ERROR) {
            console.log('%s%s : %s : %s' + (method == '' ? '' : ' : ') + '%s : %s%s', COLORS.RED, getTimeStamp(), 'ERROR', fileName(file), method, message, COLORS.NONE);
        }
    }
    
    public warn(file: string, method: string, message: string) {
        if (this.logLevel >= LOG_LEVELS.WARN) {
            console.log('%s%s : %s : %s' + (method == '' ? '' : ' : ') + '%s : %s%s', COLORS.YELLOW, getTimeStamp(), 'WARN', fileName(file), method, message, COLORS.NONE);
        }
    }
    
    public info(file: string, method: string, message: string) {
        if (this.logLevel >= LOG_LEVELS.INFO) {
            console.log('%s%s : %s : %s' + (method == '' ? '' : ' : ') + '%s : %s%s', COLORS.NONE, getTimeStamp(), 'INFO', fileName(file), method, message, COLORS.NONE);
        }
    }
    
    public trace(file: string, method: string, message: string) {
        if (this.logLevel >= LOG_LEVELS.TRACE) {
            console.log('%s%s : %s : %s' + (method == '' ? '' : ' : ') + '%s : %s', COLORS.MAGENTA, getTimeStamp(), 'TRACE', fileName(file), method, message, COLORS.NONE);
        }
    }
}

// returns the current timestamp
function getTimeStamp(): string {
    var dt = new Date();
    return dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString();
}

// strips path and returns just the name (and extension) of the file
function fileName(file: string) {
    return typeof file  !== 'undefined' ?  path.basename(file) : 'FILE_UNKNOWN';
}
    
