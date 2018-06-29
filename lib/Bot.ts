/**
 *  Represents an actual, running bot instance within a Team service
 */

export class Bot {
    private id: string;
    private name: string;

    constructor (id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}