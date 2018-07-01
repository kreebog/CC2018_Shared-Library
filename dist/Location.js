"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    getCol() {
        return this.col;
    }
    setCol(col) {
        this.col = col;
    }
    setRow(row) {
        this.row = row;
    }
    getRow() {
        return this.row;
    }
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
}
exports.Location = Location;
