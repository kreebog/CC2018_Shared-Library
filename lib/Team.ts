/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
import uuid from 'uuid/v4';
import { IBot } from './IBot';
import { ITeam } from './ITeam';
import { ITrophy, Trophies } from './ITrophy';
import { TROPHY_IDS } from './Enums';

export class Team {
    private name: string;
    private id: string;
    private logo: string;
    private trophies: Array<ITrophy>;
    private bots: Array<IBot>;

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getBots(): Array<IBot> {
        return this.bots;
    }

    public getLogo(): string {
        return this.logo;
    }

    public addTrophy(trophyId: TROPHY_IDS) {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                this.trophies[x].count++;
                return;
            }
        }
        this.trophies.push(Trophies[trophyId]);
    }

    public getTrophy(trophyId: TROPHY_IDS) {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                return this.trophies[x];
            }
        }

        return null;
    }

    public hasTrophy(trophyId: TROPHY_IDS): boolean {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                return true;
            }
        }
        return false;
    }

    public getTrophoies(): Array<ITrophy> {
        return this.trophies;
    }

    constructor(data?: ITeam) {
        if (data !== undefined) {
            this.name = data.name;
            this.bots = data.bots;
            this.id = data.id;
            this.logo = data.logo;
            this.trophies = data.trophies;
        } else {
            this.name = '';
            this.id = uuid();
            this.bots = new Array<IBot>();
            this.logo = '';
            this.trophies = new Array<ITrophy>();
        }

        if (this.trophies === undefined) this.trophies = new Array<ITrophy>();
    }

    public toJSON(): ITeam {
        let data: ITeam = {
            name: this.name,
            id: this.id,
            logo: this.logo,
            trophies: this.trophies,
            bots: this.bots
        };
        return data;
    }
}
