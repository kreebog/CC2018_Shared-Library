import { format } from 'util';
import { Logger, LOG_LEVELS } from './Logger';
import { Enums, DIRS, TAGS, GAME_RESULTS } from './Enums';

/**
 * Used to determine mode of functions modifying cell exits
 */
enum FN_MODES {
    ADD = 0,
    REMOVE
}

let log = Logger.getInstance();
let enums = Enums.getInstance();

/**
 * Represents a single cell in a maze
 */
export class Cell {
    private x: number = 0;
    private y: number =0;
    private exits: number = 0;
    private tags: number = 0;
    private visits: number = 0;
    private lastVisit: number = 0;
    private notes: string[] = new Array();

    constructor(exits: number, tags: number) {
        this.exits = exits;
        this.tags = tags;
    }

    public addNote(note: string) {
        this.notes.push(note);
        log.debug(__filename, 'addNote()', 'Note added to cell: ' + note);
    }

    public getNotes(): string[] {
        return this.notes;
    }

    public addVisit(moveNumber: number) {
        this.visits++;
        this.lastVisit = moveNumber;
    }

    public getVisitCount(): number {
        return this.visits;
    }

    public getLastVisitMoveNum(): number {
        return this.lastVisit;
    }

    public getExits(): number {
        return this.exits;
    }

    public listExits(): string {
        return enums.listSelectedBitNames(DIRS, this.exits);
    }

    /**
     * Adds exit to a cell if exit doesn't already exist.
     * Also adds neighboring exit to valid, adjoining cell.
     * 
     * @param dir 
     * @param cells 
     * @returns boolean 
     */
    public addExit(dir: DIRS, cells: Array<Array<Cell>>): boolean {
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
    public removeExit(dir: DIRS, cells: Array<Array<Cell>>): boolean {
        return this.setExit(FN_MODES.REMOVE, dir, cells);
    }

    /**
     * Returns the opposing direction for a given direction
     * @param dir 
     */
    private reverseDir(dir: DIRS): number {
        switch (dir) {
            case DIRS.NORTH: return DIRS.SOUTH;
            case DIRS.SOUTH: return DIRS.NORTH;
            case DIRS.EAST: return DIRS.WEST;
            case DIRS.WEST: return DIRS.EAST;
            default: return 0;
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
    private setExit(mode: FN_MODES, dir: DIRS, cells: Array<Array<Cell>>): boolean {
        let modeName = (mode == FN_MODES.ADD ? 'ADD' : 'REMOVE');
        let dirName = DIRS[dir];
        let validMove = true; // only set to true if valid adjoining cell exits to open an exit to

        log.debug(__filename, format('setExit(%s, %s)', modeName, dirName), format('Setting exits in cell [%d][%d]. Existing exits: %s.', this.y, this.x, this.listExits()));

        if (mode == FN_MODES.ADD ? !(this.exits & dir) : !!(this.exits & dir)) {
            let nLoc = {y: -1, x: -1}; // location adjoining cell - must open exit on both sides

            switch (dir) {
                case DIRS.NORTH:
                    validMove = this.y > 0;
                    nLoc = {y: this.y - 1, x: this.x};
                    break;
                case DIRS.SOUTH:
                    validMove = this.y < cells.length;
                    nLoc = {y: this.y + 1, x: this.x};
                    break;
                case DIRS.EAST:
                    validMove = this.x < cells[0].length;
                    nLoc = {y: this.y, x: this.x + 1};
                    break;
                case DIRS.WEST:
                    validMove = this.x > 0;
                    nLoc = {y: this.y, x: this.x - 1};
                    break;
            }

            if (validMove) {
                let neighbor: Cell = cells[nLoc.y][nLoc.x];

                this.exits = (mode == FN_MODES.ADD ? this.exits += dir : this.exits -= dir)
                log.debug(__filename, format('setExit(%s, %s)', modeName, dirName), format('Exits set in cell [%d][%d]. Exits: ', this.y, this.x, this.listExits()));

                neighbor.exits = (mode == FN_MODES.ADD ? neighbor.exits += this.reverseDir(dir) : neighbor.exits -= dir)
                log.debug(__filename, format('setExit(%s, %s)', modeName, dirName), format('Adjoining exits set in cell [%d][%d]. Exits: ', neighbor.y, neighbor.x, neighbor.listExits()));
            } else {
                log.warn(__filename, format('setExit(%s, %s)', modeName, dirName), format('Invalid adjoining cell location: [%d][%d]', nLoc.y, nLoc.x));
            }
        } else {
            log.warn(__filename, format('setExit(%s, %s)', modeName, dirName), format('Invalid action in cell [%d][%d]. Exit %s. Cell exits: %s', this.y, this.x, (mode == FN_MODES.ADD ? 'already exists' : 'not found'), this.listExits()));
        }
        
        return validMove;
    }

    /**
     * Returns an array representing the cells grid coordinates (y, x)
     */
    public getLocation() {
        return {y:this.y, x:this.x};
    }

    /**
     * Set the cell's grid coordinates
     * @param x 
     * @param y 
     */
    public setLocation(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Returns the bitwise integer value representing cell tags 
     */
    public getTags(): number {
        return this.tags;
    }

    /**
     * Returns list of string values representing cell tags 
     */
    public listTags(): string {
        return enums.listSelectedBitNames(TAGS, this.tags);
    }


    /**
     * Adds an Enums.Tag to this cell if it doesn't already exist
     * @param tag 
     */
    public addTag(tag: TAGS) {
        let tagName = TAGS[tag];

        if (!(this.tags & tag)) {
            
            this.tags += tag;

            switch (tag) {
                case TAGS.START:
                    // force north exit on start cell - do not use addExit() for this!
                    if (!(this.exits & DIRS.NORTH)) {
                        this.exits += DIRS.NORTH;
                        log.debug(__filename, 'addTag(' + tagName + ')', format('[%d][%d] has %s tag. Forcing NORTH exit through edge. Cell exits: %s', this.y, this.x, tagName, this.listExits()));
                    }
                    break;
                case TAGS.FINISH:
                    // force north exit on finish cell - do not use addExit() for this!
                    if (!(this.exits & DIRS.SOUTH)) {
                        this.exits += DIRS.SOUTH;
                        log.debug(__filename, 'addTag(' + tagName + ')', format('[%d][%d] has %s tag. Forcing NORTH exit through edge. Cell exits: %s', this.y, this.x, tagName, this.listExits()));
                    }
                    break;
            }
                log.debug(__filename, 'addTag(' + tagName + ')', format('Tag %s added to cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        } else {
            log.warn(__filename, 'addTag(' + tagName + ')', format('Tag %s already exists in cell [%d][%d]. Current tags: %s.',  tagName, this.y, this.x, this.listTags()));
        }
    }

    /**
     * Removes a tag from this cell, if it exists
     * @param tag 
     */
    public removeTag(tag: TAGS) {
        let tagName = TAGS[tag];
        if (!!(this.tags & tag)) {
            this.tags -= tag;
            log.debug(__filename, 'removeTag(' + tagName + ')', format('Tag %s removed from cell [%d][%d]. Current tags: %s.', tagName, this.y, this.x, this.listTags()));
        } else {
            log.warn(__filename, 'removeTag(' + tagName + ')', format('Tag %s not found in cell [%d][%d]. Current tags: %s.',  tagName, this.y, this.x, this.listTags()));
        }
    }
}

export default Cell;