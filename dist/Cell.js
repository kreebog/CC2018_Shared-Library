"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const Logger_1 = require("./Logger");
const Enums_1 = require("./Enums");
const Pos_1 = require("./Pos");
/**
 * Used to determine mode of functions modifying cell exits
 */
var FN_MODES;
(function (FN_MODES) {
    FN_MODES[FN_MODES["ADD"] = 0] = "ADD";
    FN_MODES[FN_MODES["REMOVE"] = 1] = "REMOVE";
})(FN_MODES || (FN_MODES = {}));
let log = Logger_1.Logger.getInstance();
let enums = Enums_1.Enums.getInstance();
/**
 * Represents a single cell in a maze
 */
class Cell {
    constructor(data) {
        if (data !== undefined) {
            this.x = data.col;
            this.y = data.row;
            this.exits = data.exits;
            this.tags = data.tags;
            this.visits = data.visits;
            this.lastVisit = data.lastVisit;
            this.notes = data.notes;
        }
        else {
            this.x = 0; // col
            this.y = 0; // row
            this.exits = 0;
            this.tags = 0;
            this.visits = 0;
            this.lastVisit = 0;
            this.notes = new Array();
        }
    }
    toJSON() {
        let cellData = {
            row: this.getPos().row,
            col: this.getPos().col,
            exits: this.exits,
            tags: this.tags,
            visits: this.visits,
            lastVisit: this.lastVisit,
            notes: this.notes
        };
        return cellData;
    }
    addNote(note) {
        this.notes.push(note);
        log.debug(__filename, 'addNote()', 'Note added to cell: ' + note);
    }
    getNotes() {
        return this.notes;
    }
    addVisit(moveNumber) {
        this.visits++;
        this.lastVisit = moveNumber;
    }
    getVisitCount() {
        return this.visits;
    }
    getLastVisitMoveNum() {
        return this.lastVisit;
    }
    getExits() {
        return this.exits;
    }
    listExits() {
        return enums.listSelectedBitNames(Enums_1.DIRS, this.exits);
    }
    /**
     * Adds exit to a cell if exit doesn't already exist.
     * Also adds neighboring exit to valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    addExit(dir, cells) {
        return this.setExit(FN_MODES.ADD, dir, cells);
    }
    /**
     * Adds exit to a cell if exit doesn't already exist.
     * Also adds neighboring exit to valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    removeExit(dir, cells) {
        return this.setExit(FN_MODES.REMOVE, dir, cells);
    }
    /**
     * Returns the opposing direction for a given direction
     * @param dir
     */
    reverseDir(dir) {
        switch (dir) {
            case Enums_1.DIRS.NORTH:
                return Enums_1.DIRS.SOUTH;
            case Enums_1.DIRS.SOUTH:
                return Enums_1.DIRS.NORTH;
            case Enums_1.DIRS.EAST:
                return Enums_1.DIRS.WEST;
            case Enums_1.DIRS.WEST:
                return Enums_1.DIRS.EAST;
            default:
                return 0;
        }
    }
    /**
     * Adds or Removes cell exits, depending on SET_EXIT_MODES value.
     * Also adds or removes opposite exit from valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    setExit(mode, dir, cells) {
        let modeName = mode == FN_MODES.ADD ? 'ADD' : 'REMOVE';
        let dirName = Enums_1.DIRS[dir];
        let validMove = true; // only set to true if valid adjoining cell exits to open an exit to
        log.debug(__filename, util_1.format('setExit(%s, %s)', modeName, dirName), util_1.format('Setting exits in cell [%d][%d]. Existing exits: %s.', this.y, this.x, this.listExits()));
        if (mode == FN_MODES.ADD ? !(this.exits & dir) : !!(this.exits & dir)) {
            let nLoc = { y: -1, x: -1 }; // location adjoining cell - must open exit on both sides
            switch (dir) {
                case Enums_1.DIRS.NORTH:
                    validMove = this.y > 0;
                    nLoc = { y: this.y - 1, x: this.x };
                    break;
                case Enums_1.DIRS.SOUTH:
                    validMove = this.y < cells.length;
                    nLoc = { y: this.y + 1, x: this.x };
                    break;
                case Enums_1.DIRS.EAST:
                    validMove = this.x < cells[0].length;
                    nLoc = { y: this.y, x: this.x + 1 };
                    break;
                case Enums_1.DIRS.WEST:
                    validMove = this.x > 0;
                    nLoc = { y: this.y, x: this.x - 1 };
                    break;
            }
            if (validMove) {
                let neighbor = cells[nLoc.y][nLoc.x];
                this.exits = mode == FN_MODES.ADD ? (this.exits += dir) : (this.exits -= dir);
                log.debug(__filename, util_1.format('setExit(%s, %s)', modeName, dirName), util_1.format('Exits set in cell [%d][%d]. Exits: ', this.y, this.x, this.listExits()));
                neighbor.exits = mode == FN_MODES.ADD ? (neighbor.exits += this.reverseDir(dir)) : (neighbor.exits -= dir);
                log.debug(__filename, util_1.format('setExit(%s, %s)', modeName, dirName), util_1.format('Adjoining exits set in cell [%d][%d]. Exits: ', neighbor.y, neighbor.x, neighbor.listExits()));
            }
            else {
                log.warn(__filename, util_1.format('setExit(%s, %s)', modeName, dirName), util_1.format('Invalid adjoining cell location: [%d][%d]', nLoc.y, nLoc.x));
            }
        }
        else {
            log.warn(__filename, util_1.format('setExit(%s, %s)', modeName, dirName), util_1.format('Invalid action in cell [%d][%d]. Exit %s. Cell exits: %s', this.y, this.x, mode == FN_MODES.ADD ? 'already exists' : 'not found', this.listExits()));
        }
        return validMove;
    } // setExit
    /**
     * Returns an array representing the cells grid coordinates (y, x)
     */
    getPos() {
        return new Pos_1.Pos(this.y, this.x);
    }
    // checks for an open direction
    isDirOpen(dir) {
        return !!(this.getExits() & dir);
    }
    /**
     * Set the cell's grid coordinates
     * @param x
     * @param y
     */
    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Returns the bitwise integer value representing cell tags
     */
    getTags() {
        return this.tags;
    }
    /**
     * Returns list of string values representing cell tags
     */
    listTags() {
        return enums.listSelectedBitNames(Enums_1.TAGS, this.tags);
    }
    // removes all but the carved tag - used for removing traps from the solution path
    clearTags() {
        let tags = Enums_1.TAGS.CARVED;
        if (!!(this.tags & Enums_1.TAGS.START))
            tags += Enums_1.TAGS.START;
        if (!!(this.tags & Enums_1.TAGS.FINISH))
            tags += Enums_1.TAGS.FINISH;
        this.tags = tags;
    }
    /**
     * Adds an Enums.Tag to this cell if it doesn't already exist
     * @param tag
     */
    addTag(tag) {
        let tagName = Enums_1.TAGS[tag];
        if (!(this.tags & tag)) {
            this.tags += tag;
            switch (tag) {
                case Enums_1.TAGS.START:
                    // force north exit on start cell - do not use addExit() for this!
                    if (!(this.exits & Enums_1.DIRS.NORTH)) {
                        this.exits += Enums_1.DIRS.NORTH;
                        log.debug(__filename, 'addTag(' + tagName + ')', util_1.format('[%d][%d] has %s tag. Forcing NORTH exit through edge. Cell exits: %s', this.y, this.x, tagName, this.listExits()));
                    }
                    break;
                case Enums_1.TAGS.FINISH:
                    // force north exit on finish cell - do not use addExit() for this!
                    if (!(this.exits & Enums_1.DIRS.SOUTH)) {
                        this.exits += Enums_1.DIRS.SOUTH;
                        log.debug(__filename, 'addTag(' + tagName + ')', util_1.format('[%d][%d] has %s tag. Forcing NORTH exit through edge. Cell exits: %s', this.y, this.x, tagName, this.listExits()));
                    }
                    break;
            }
            log.debug(__filename, 'addTag(' + tagName + ')', util_1.format('Tag %s added to cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        }
        else {
            log.warn(__filename, 'addTag(' + tagName + ')', util_1.format('Tag %s already exists in cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        }
    }
    /**
     * Removes a tag from this cell, if it exists
     * @param tag
     */
    removeTag(tag) {
        let tagName = Enums_1.TAGS[tag];
        if (!!(this.tags & tag)) {
            this.tags -= tag;
            log.debug(__filename, 'removeTag(' + tagName + ')', util_1.format('Tag %s removed from cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        }
        else {
            log.warn(__filename, 'removeTag(' + tagName + ')', util_1.format('Tag %s not found in cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        }
    }
}
exports.Cell = Cell;
exports.default = Cell;
