"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// various states that the Player might be in
var TROPHY_IDS;
(function (TROPHY_IDS) {
    TROPHY_IDS[TROPHY_IDS["WASTED_TIME"] = 0] = "WASTED_TIME";
    TROPHY_IDS[TROPHY_IDS["NERVOUS_WALK"] = 1] = "NERVOUS_WALK";
    TROPHY_IDS[TROPHY_IDS["WATCHING_PAINT_DRY"] = 2] = "WATCHING_PAINT_DRY";
    TROPHY_IDS[TROPHY_IDS["WISHFUL_THINKING"] = 4] = "WISHFUL_THINKING";
    TROPHY_IDS[TROPHY_IDS["WISHFUL_DYING"] = 8] = "WISHFUL_DYING";
})(TROPHY_IDS = exports.TROPHY_IDS || (exports.TROPHY_IDS = {}));
var PLAYER_STATES;
(function (PLAYER_STATES) {
    PLAYER_STATES[PLAYER_STATES["NONE"] = 0] = "NONE";
    PLAYER_STATES[PLAYER_STATES["SITTING"] = 1] = "SITTING";
    PLAYER_STATES[PLAYER_STATES["STANDING"] = 2] = "STANDING";
    PLAYER_STATES[PLAYER_STATES["LYING"] = 4] = "LYING";
    PLAYER_STATES[PLAYER_STATES["STUNNED"] = 8] = "STUNNED";
    PLAYER_STATES[PLAYER_STATES["BLIND"] = 16] = "BLIND";
    PLAYER_STATES[PLAYER_STATES["BURING"] = 32] = "BURING";
    PLAYER_STATES[PLAYER_STATES["LAMED"] = 64] = "LAMED";
    PLAYER_STATES[PLAYER_STATES["BEARTRAPPED"] = 128] = "BEARTRAPPED";
    PLAYER_STATES[PLAYER_STATES["TARPITTED"] = 256] = "TARPITTED";
})(PLAYER_STATES = exports.PLAYER_STATES || (exports.PLAYER_STATES = {}));
// Cardinal directions used for movement, exits, and other direction-based functions
var DIRS;
(function (DIRS) {
    DIRS[DIRS["NONE"] = 0] = "NONE";
    DIRS[DIRS["NORTH"] = 1] = "NORTH";
    DIRS[DIRS["SOUTH"] = 2] = "SOUTH";
    DIRS[DIRS["EAST"] = 4] = "EAST";
    DIRS[DIRS["WEST"] = 8] = "WEST";
})(DIRS = exports.DIRS || (exports.DIRS = {}));
// Tags for cells, avatar, item, and other functions
var TAGS;
(function (TAGS) {
    TAGS[TAGS["NONE"] = 0] = "NONE";
    TAGS[TAGS["START"] = 1] = "START";
    TAGS[TAGS["FINISH"] = 2] = "FINISH";
    TAGS[TAGS["PATH"] = 4] = "PATH";
    TAGS[TAGS["CARVED"] = 8] = "CARVED";
    TAGS[TAGS["LAVA"] = 16] = "LAVA";
    TAGS[TAGS["TRAP_PIT"] = 32] = "TRAP_PIT";
    TAGS[TAGS["TRAP_BEARTRAP"] = 64] = "TRAP_BEARTRAP";
    TAGS[TAGS["TRAP_TARPIT"] = 128] = "TRAP_TARPIT";
    TAGS[TAGS["TRAP_FLAMETHOWER"] = 256] = "TRAP_FLAMETHOWER";
})(TAGS = exports.TAGS || (exports.TAGS = {}));
// enumeration of possible game results
var GAME_RESULTS;
(function (GAME_RESULTS) {
    GAME_RESULTS[GAME_RESULTS["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    GAME_RESULTS[GAME_RESULTS["OUT_OF_MOVES"] = 2] = "OUT_OF_MOVES";
    GAME_RESULTS[GAME_RESULTS["OUT_OF_TIME"] = 4] = "OUT_OF_TIME";
    GAME_RESULTS[GAME_RESULTS["DEATH_TRAP"] = 8] = "DEATH_TRAP";
    GAME_RESULTS[GAME_RESULTS["DEATH_POISON"] = 16] = "DEATH_POISON";
    GAME_RESULTS[GAME_RESULTS["DEATH_LAVA"] = 32] = "DEATH_LAVA";
    GAME_RESULTS[GAME_RESULTS["WIN"] = 64] = "WIN";
})(GAME_RESULTS = exports.GAME_RESULTS || (exports.GAME_RESULTS = {}));
// enumeration of possible game states
var GAME_STATES;
(function (GAME_STATES) {
    GAME_STATES[GAME_STATES["NEW"] = 1] = "NEW";
    GAME_STATES[GAME_STATES["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    GAME_STATES[GAME_STATES["WAIT_BOT"] = 4] = "WAIT_BOT";
    GAME_STATES[GAME_STATES["WAIT_TEAM"] = 8] = "WAIT_TEAM";
    GAME_STATES[GAME_STATES["FINISHED"] = 16] = "FINISHED";
    GAME_STATES[GAME_STATES["ABORTED"] = 32] = "ABORTED";
    GAME_STATES[GAME_STATES["ERROR"] = 64] = "ERROR";
})(GAME_STATES = exports.GAME_STATES || (exports.GAME_STATES = {}));
/**
 * Singleton of Enumerations used by CC2018
 */
class Enums {
    // Private constructor to enforce singleton pattern
    constructor() { }
    /**
     * Singleton pattern
     */
    static getInstance() {
        if (!Enums.instance) {
            Enums.instance = new Enums();
        }
        return Enums.instance;
    }
    /**
     * Returns comma-delimited string of the selected (bitwise) values within
     * the given enumeration.
     *
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    listSelectedBitNames(targetEnum, selectedBits) {
        let ret = '';
        for (const dir in targetEnum) {
            if (Number(dir)) {
                let bitVal = parseInt(dir);
                if (!!(bitVal & selectedBits)) {
                    let stringVal = targetEnum[bitVal];
                    ret += ret.length == 0 ? stringVal : ', ' + stringVal;
                }
            }
        }
        if (ret.length == 0)
            ret = 'NONE';
        return ret;
    }
    /**
     * Returns string array of the selected (bitwise) values within
     * the given enumeration.
     *
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    getSelectedBitNames(targetEnum, selectedBits) {
        let ret = new Array();
        for (const dir in targetEnum) {
            if (Number(dir)) {
                let bitVal = parseInt(dir);
                if (!!(bitVal & selectedBits)) {
                    let stringVal = targetEnum[bitVal];
                    ret.push(stringVal);
                }
            }
        }
        if (ret.length == 0)
            ret.push('NONE');
        return ret;
    }
}
exports.Enums = Enums;
