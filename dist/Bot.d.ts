import { IBot } from './IBot';
/**
 *  Represents an actual, running bot instance within a Team service
 */
export declare class Bot {
    private id;
    private name;
    private weight;
    private coder;
    constructor(data?: IBot);
}
