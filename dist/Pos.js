"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
// Position - X, Y Coordinates within the maze grid
class Pos {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    /**
     * Returns true of values of given Pos instance match
     * the values of the current Pos
     * @param pos
     */
    equals(pos) {
        return this.row == pos.row && this.col == pos.col;
    }
    toString() {
        return util_1.format('Row: %d, Col: %d', this.row, this.col);
    }
}
exports.Pos = Pos;
