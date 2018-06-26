/**
 * MazeStub - Just the basic maze data - Used where only a list of mazes is needed.
 *
 */
export declare class MazeStub {
    private id;
    private height;
    private width;
    private seed;
    private url;
    constructor();
    loadFromJSON(jsonMaze: string): this;
    getSeed(): string;
    getHeight(): number;
    getWidth(): number;
    getId(): string;
    getUrl(): string;
}
