/**
 * MazeStub - Just the basic maze data - Used where only a list of mazes is needed.
 * 
 */
export class MazeStub {
    private id: string = '';
    private height: number = 0;
    private width: number = 0;
    private seed: string = '';
    private url: string = '';

    constructor() {
    }

    // loads object from values given in json string
    public loadFromJSON(jsonMaze: string): this {
        let obj = JSON.parse(jsonMaze);

        this.height = obj.height;
        this.width = obj.width;
        this.seed = obj.seed;
        this.id = obj.id;
        this.url = obj.url;

        return this;
    }

    public getSeed(): string {
        return this.seed;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number { 
        return this.width;
    }

    public getId() : string {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }
}
