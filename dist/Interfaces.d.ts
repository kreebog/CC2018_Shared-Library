import { Cell } from './Cell';
/**
 * Maze Cell interface
 */
export interface ICell {
    x: number;
    y: number;
    exits: number;
    tags: number;
    visits: number;
    lastVisit: number;
    notes: Array<string>;
}
/**
 *  Maze interface
 */
export interface IMaze {
    cells: Array<Array<Cell>>;
    height: number;
    width: number;
    seed: string;
    textRender: string;
    id: string;
}
/**
 * Interface for Maze Stub Data - Used when working with lists of mazes.
 */
export interface IMazeStub {
    id: string;
    height: number;
    width: number;
    seed: string;
    url: string;
}
