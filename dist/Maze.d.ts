import { IMaze } from './IMaze';
import { IMazeStub } from './IMazeStub';
import Cell from './Cell';
import { Pos } from './Pos';
import { ICell } from './ICell';
/**
 * Maze class - the heart of everything!
 */
export declare class Maze {
    private cells;
    private height;
    private width;
    private seed;
    private textRender;
    private id;
    private startCell;
    private finishCell;
    private shortestPathLength;
    /**
     * Instantiates or new or pre-loaded Maze object
     * @param data - IMaze interface prefilled with required data
     */
    constructor(data?: IMaze);
    /**
     * @deprecated - Use constructor [ new Maze(data:IMaze) ] instead.
     */
    loadFromJSON(data: IMaze): this;
    /**
     * populate and return base maze data
     */
    toJSON(): IMaze;
    getMazeStub(): IMazeStub;
    getStartCell(): Pos;
    getFinishCell(): Pos;
    getSeed(): string;
    getHeight(): number;
    getWidth(): number;
    getId(): string;
    getShortestPathLength(): number;
    getCell(row: number, col: number): Cell;
    getICell(row: number, col: number): ICell;
    /**
     * Generates a new maze based on the given parameters
     * @param height - The height of the maze grid
     * @param width - The width of the maze grid
     * @param seed - PRNG seed value.  If empty, maze will be random and unrepeatable
     */
    generate(height: number, width: number, seed: string): this;
    private carvePassage;
    /**
     * Returns a text rendering of the maze as a grid of 3x3
     * character blocks.
     */
    render(): string;
    /**
     * Wraps the recursive tagSolution function
     * and initializes tracking variables
     */
    solveAndTag(): void;
    /**
     *
     * @param cellPos
     * @param pathId
     */
    private tagSolution;
}
