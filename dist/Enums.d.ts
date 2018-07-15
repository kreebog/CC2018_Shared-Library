export declare enum TROPHY_IDS {
    WASTED_TIME = 0,
    NERVOUS_WALK = 1,
    WATCHING_PAINT_DRY = 2,
    WISHFUL_THINKING = 3,
    WISHFUL_DYING = 4,
    WINNER_WINNER_CHEDDAR_DINNER = 5,
    FLAWLESS_VICTORY = 6,
    YOU_FOUGHT_THE_WALL = 7,
    SPINNING_YOUR_WHEELS = 8,
    SCRIBBLER = 9,
    PAPERBACK_WRITER = 10,
    JUMPING_JACK_FLASH = 11,
    KICKING_UP_DUST = 12,
    MIGHTY_MOUSE = 13,
    SHORTCUTTER = 14,
    THE_LONG_WAY_HOME = 15,
    THE_LONGER_WAY_HOME = 16,
    THE_LONGEST_WAY_HOME = 17,
    LIGHT_AT_THE_END = 18,
    DAZED_AND_CONFUSED = 19,
    DOUBLE_BACKER = 20,
    LOOPER = 21
}
export declare enum PLAYER_STATES {
    NONE = 0,
    SITTING = 1,
    STANDING = 2,
    LYING = 4,
    STUNNED = 8,
    BLIND = 16,
    BURING = 32,
    LAMED = 64,
    BEARTRAPPED = 128,
    TARPITTED = 256,
    DEAD = 512
}
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
    CARVED = 8,
    LAVA = 16,
    TRAP_PIT = 32,
    TRAP_BEARTRAP = 64,
    TRAP_TARPIT = 128,
    TRAP_FLAMETHOWER = 256
}
export declare enum GAME_RESULTS {
    IN_PROGRESS = 0,
    OUT_OF_MOVES = 1,
    OUT_OF_TIME = 2,
    DEATH_TRAP = 3,
    DEATH_POISON = 4,
    DEATH_LAVA = 5,
    WIN = 6,
    WIN_FLAWLESS = 7,
    ABANDONED = 8
}
export declare enum GAME_STATES {
    NEW = 0,
    IN_PROGRESS = 1,
    FINISHED = 2,
    ABORTED = 3,
    ERROR = 4
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
