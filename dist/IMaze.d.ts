import { Cell } from './Cell';
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
