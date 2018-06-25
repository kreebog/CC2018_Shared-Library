/**
 * Cardinal directions used for movement, exits, and other direction-based functions
 */
export declare enum DIRS {
    NORTH = 1,
    SOUTH = 2,
    EAST = 4,
    WEST = 8
}
/**
 * Tags for cells, avatar, item, and other functions
 */
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
 * Returns comma-delimited string of the selected (bitwise) values within
 * the given enumeration.
 *
 * @param targetEnum - Only works with bitwise enumerations!
 * @param selectedBits - Number representing the selected bits
 */
export declare function listSelectedBitNames(targetEnum: Object, selectedBits: number): string;
/**
 * Returns string array of the selected (bitwise) values within
 * the given enumeration.
 *
 * @param targetEnum - Only works with bitwise enumerations!
 * @param selectedBits - Number representing the selected bits
 */
export declare function getSelectedBitNames(targetEnum: Object, selectedBits: number): Array<string>;
