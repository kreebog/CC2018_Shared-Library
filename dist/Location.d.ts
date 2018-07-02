/**
 * Represents a row/col based location within a two-dimensional array
 */
export declare class Location {
    private col;
    private row;
    /**
     *
     * @param row number
     * @param col number
     */
    getPos(row: number, col: number): {
        row: number;
        col: number;
    };
    /**
     *
     * @param row
     * @param col
     */
    setPos(row: number, col: number): void;
    constructor(col: number, row: number);
}
