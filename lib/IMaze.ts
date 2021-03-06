import { Cell } from './Cell';
import { Pos } from './Pos';

/**
 *  Maze interface
 */
export interface IMaze {
    cells: Array<Array<Cell>>;
    height: number;
    width: number;
    seed: string;
    challenge: number;
    textRender: string;
    id: string;
    startCell: Pos;
    finishCell: Pos;
    shortestPathLength: number;
}
