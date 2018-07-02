"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a row/col based location within a two-dimensional array
 */
class Location {
    /**
     *
     * @param row number
     * @param col number
     */
    getPos(row, col) {
        return { row: this.row, col: this.col };
    }
    /**
     *
     * @param row
     * @param col
     */
    setPos(row, col) {
        this.row = row;
        this.col = col;
    }
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
}
exports.Location = Location;
