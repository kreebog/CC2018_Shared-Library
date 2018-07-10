"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(TAGS = exports.TAGS || (exports.TAGS = {}));
// enumeration of possible game results
var GAME_RESULTS;
(function (GAME_RESULTS) {
    GAME_RESULTS[GAME_RESULTS["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    GAME_RESULTS[GAME_RESULTS["OUT_OF_MOVES"] = 2] = "OUT_OF_MOVES";
    GAME_RESULTS[GAME_RESULTS["OUT_OF_TIME"] = 4] = "OUT_OF_TIME";
    GAME_RESULTS[GAME_RESULTS["DEATH_TRAP"] = 8] = "DEATH_TRAP";
    GAME_RESULTS[GAME_RESULTS["DEATH_POISON"] = 16] = "DEATH_POISON";
    GAME_RESULTS[GAME_RESULTS["WIN"] = 32] = "WIN";
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
// enumeration of possible actions
var ACTIONS;
(function (ACTIONS) {
    ACTIONS[ACTIONS["PASS"] = 0] = "PASS";
    ACTIONS[ACTIONS["MOVE"] = 1] = "MOVE";
    ACTIONS[ACTIONS["JUMP"] = 2] = "JUMP";
    ACTIONS[ACTIONS["LOOK"] = 4] = "LOOK";
})(ACTIONS = exports.ACTIONS || (exports.ACTIONS = {}));
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
