export class Location{
    private col:number;
    private row:number;

    public getCol():number {
        return this.col;
    }

    public setCol(col:number) {
        this.col = col;
    }

    public setRow(row:number) {
        this.row = row;
    }

    public getRow():number {
        return this.row
    }
    
    constructor(col:number, row:number) {
        this.col = col;
        this.row = row;
    }
}