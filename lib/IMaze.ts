import { Cell } from "./Cell";
import { Pos } from "./Pos";

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
    startCell: Pos;
    finishCell: Pos;
}
