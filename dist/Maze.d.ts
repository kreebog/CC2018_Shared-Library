import { IMaze } from './IMaze';
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
    constructor();
    loadFromJSON(data: IMaze): this;
    getSeed(): string;
    getHeight(): number;
    getWidth(): number;
    getId(): string;
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
}
