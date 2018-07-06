export declare class Pos {
    row: number;
    col: number;
    constructor(row: number, col: number);
    /**
     * Returns true of values of given Pos instance match
     * the values of the current Pos
     * @param pos
     */
    equals(pos: Pos): boolean;
    toString(): string;
}
