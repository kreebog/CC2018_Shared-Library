/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
import uuid from 'uuid/v4';
import { IBot } from './IBot';
import { ITeam } from './ITeam';

export class Team {
    private name: string;
    private id: string;
    private bots: Array<IBot>;

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getBots() {
        return this.bots;
    }

    constructor(data?: ITeam) {
        if (data !== undefined) {
            this.name = data.name;
            this.bots = data.bots;
            this.id = data.id;
        } else {
            this.name = '';
            this.id = uuid();
            this.bots = new Array<IBot>();
        }
    }
}
