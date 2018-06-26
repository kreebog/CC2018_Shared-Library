export declare enum DIRS {
    NORTH = 1,
    SOUTH = 2,
    EAST = 4,
    WEST = 8
}
export declare enum TAGS {
    START = 1,
    FINISH = 2,
    PATH = 4,
    CARVED = 8
}
export declare enum GAME_RESULTS {
    WIN = 0,
    OUT_OF_MOVES = 1,
    OUT_OF_TIME = 2,
    DEATH_TRAP = 3,
    DEATH_POISON = 4
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
