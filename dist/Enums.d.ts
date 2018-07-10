export declare enum DIRS {
    NONE = 0,
    NORTH = 1,
    SOUTH = 2,
    EAST = 4,
    WEST = 8
}
export declare enum TAGS {
    NONE = 0,
    START = 1,
    FINISH = 2,
    PATH = 4,
    CARVED = 8
}
export declare enum GAME_RESULTS {
    IN_PROGRESS = 1,
    OUT_OF_MOVES = 2,
    OUT_OF_TIME = 4,
    DEATH_TRAP = 8,
    DEATH_POISON = 16,
    WIN = 32
}
export declare enum GAME_STATES {
    NEW = 1,
    IN_PROGRESS = 2,
    WAIT_BOT = 4,
    WAIT_TEAM = 8,
    FINISHED = 16,
    ABORTED = 32,
    ERROR = 64
}
export declare enum ACTIONS {
    PASS = 0,
    MOVE = 1,
    JUMP = 2,
    LOOK = 4
}
/**
 * Singleton of Enumerations used by CC2018
 */
export declare class Enums {
    private static instance;
    private constructor();
    /**
     * Singleton pattern
     */
    static getInstance(): Enums;
    /**
     * Returns comma-delimited string of the selected (bitwise) values within
     * the given enumeration.
     *
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    listSelectedBitNames(targetEnum: Object, selectedBits: number): string;
    /**
     * Returns string array of the selected (bitwise) values within
     * the given enumeration.
     *
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    getSelectedBitNames(targetEnum: Object, selectedBits: number): Array<string>;
}
