export declare enum LOG_LEVELS {
    NONE = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4,
    TRACE = 5
}
export declare function setLogLevel(level: LOG_LEVELS): void;
export declare function debug(file: string, method: string, message: string): void;
export declare function error(file: string, method: string, message: string): void;
export declare function warn(file: string, method: string, message: string): void;
export declare function info(file: string, method: string, message: string): void;
export declare function trace(file: string, method: string, message: string): void;
