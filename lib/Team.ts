/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
import uuid from 'uuid/v4';
import { IBot } from './IBot';
import { ITeam } from './ITeam';
import { ITrophy } from './ITrophy';
import { TROPHY_IDS } from './Enums';

let Trophies: Array<ITrophy> = new Array<ITrophy>(
    { id: TROPHY_IDS.WASTED_TIME, name: 'Wasted Time', description: "You weren't in too much of a hurry to stop and dance, or smell the flowers, or practice your moonwalk...", count: 1 },
    { id: TROPHY_IDS.NERVOUS_WALK, name: 'A Nervous Walk', description: 'You kept looking back over your shoulder - worried about the lava?', count: 1 },
    { id: TROPHY_IDS.WATCHING_PAINT_DRY, name: 'Watching Paint Dry', description: 'Why did you stare at the wall? Why? WHY?!', count: 1 },
    { id: TROPHY_IDS.WISHFUL_THINKING, name: 'Wishful Thinking', description: "You thought about trying to walk out through the entrance, didn't you?", count: 1 },
    { id: TROPHY_IDS.WISHFUL_DYING, name: 'Wishful Dying', description: 'You actually TRIED to walk back out through the entrance! We told you there was LAVA!', count: 1 },
    { id: TROPHY_IDS.WINNER_WINNER_CHEDDAR_DINNER, name: 'Winner, Winner, Cheddar Dinner', description: 'You escaped the maze!', count: 1 },
    { id: TROPHY_IDS.PERFECT_RUN, name: 'Perfect Run', description: 'You beat a maze in the shortest possible number of moves. NICE!', count: 1 },
    { id: TROPHY_IDS.YOU_FOUGHT_THE_WALL, name: 'You Fought the Wall', description: 'You fought the wall and the wall won.', count: 1 },
    { id: TROPHY_IDS.BOOT_SCOOTER, name: 'Boot Scooter', description: 'You tried to walk without bothering to stand up first.', count: 1 }
);

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
