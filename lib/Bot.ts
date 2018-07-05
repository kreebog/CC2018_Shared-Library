import { IBot } from './IBot';
import uuid from 'uuid/v4';

/**
 *  Represents an actual, running bot instance within a Team service
 */

export class Bot {
    private id: string;
    private name: string;
    private weight: number;
    private coder: string;

    constructor(data?: IBot) {
        if (data !== undefined) {
            this.id = uuid();
            this.name = data.name;
            this.weight = data.weight;
            this.coder = data.coder;
        } else {
            this.id = uuid();
            this.name = '';
            this.weight = 100;
            this.coder = '';
        }
    }
}
