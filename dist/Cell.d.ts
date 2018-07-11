import { DIRS, TAGS } from './Enums';
import { ICell } from './ICell';
import { Pos } from './Pos';
/**
 * Represents a single cell in a maze
 */
export declare class Cell {
    private x;
    private y;
    private exits;
    private tags;
    private visits;
    private lastVisit;
    private notes;
    constructor(data?: ICell);
    toJSON(): ICell;
    addNote(note: string): void;
    getNotes(): string[];
    addVisit(moveNumber: number): void;
    getVisitCount(): number;
    getLastVisitMoveNum(): number;
    getExits(): number;
    listExits(): string;
    /**
     * Adds exit to a cell if exit doesn't already exist.
     * Also adds neighboring exit to valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    addExit(dir: DIRS, cells: Array<Array<Cell>>): boolean;
    /**
     * Adds exit to a cell if exit doesn't already exist.
     * Also adds neighboring exit to valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    removeExit(dir: DIRS, cells: Array<Array<Cell>>): boolean;
    /**
     * Returns the opposing direction for a given direction
     * @param dir
     */
    private reverseDir;
    /**
     * Adds or Removes cell exits, depending on SET_EXIT_MODES value.
     * Also adds or removes opposite exit from valid, adjoining cell.
     *
     * @param dir
     * @param cells
     * @returns boolean
     */
    private setExit;
    /**
     * Returns an array representing the cells grid coordinates (y, x)
     */
    getPos(): Pos;
    isDirOpen(dir: DIRS): boolean;
    /**
     * Set the cell's grid coordinates
     * @param x
     * @param y
     */
    setLocation(x: number, y: number): void;
    /**
     * Returns the bitwise integer value representing cell tags
     */
    getTags(): number;
    /**
     * Returns list of string values representing cell tags
     */
    listTags(): string;
    /**
     * Adds an Enums.Tag to this cell if it doesn't already exist
     * @param tag
     */
    addTag(tag: TAGS): void;
    /**
     * Removes a tag from this cell, if it exists
     * @param tag
     */
    removeTag(tag: TAGS): void;
}
export default Cell;
