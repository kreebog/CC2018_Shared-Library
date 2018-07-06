import { format } from 'util';

// Position - X, Y Coordinates within the maze grid
export class Pos {
    public row: number;
    public col: number;

    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    /**
     * Returns true of values of given Pos instance match
     * the values of the current Pos
     * @param pos
     */
    public equals(pos: Pos): boolean {
        return this.row == pos.row && this.col == pos.col;
    }

    public toString(): string {
        return format('Row: %d, Col: %d', this.row, this.col);
    }
}
