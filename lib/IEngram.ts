// Engram is a frame of memory relating to actions taken
import { ICell } from './ICell';

export interface IEngram {
    cell: ICell;
    sight: string;
    sound: string;
    smell: string;
    touch: string;
    taste: string;
}