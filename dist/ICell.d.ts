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
