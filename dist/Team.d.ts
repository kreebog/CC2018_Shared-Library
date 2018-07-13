import { IBot } from './IBot';
import { ITeam } from './ITeam';
import { ITrophy } from './ITrophy';
import { TROPHY_IDS } from './Enums';
export declare class Team {
    private name;
    private id;
    private logo;
    private trophies;
    private bots;
    getId(): string;
    getName(): string;
    getBots(): Array<IBot>;
    getLogo(): string;
    addTrophy(trophyId: TROPHY_IDS): void;
    getTrophy(trophyId: TROPHY_IDS): ITrophy | null;
    hasTrophy(trophyId: TROPHY_IDS): boolean;
    getTrophoies(): Array<ITrophy>;
    constructor(data?: ITeam);
    toJSON(): ITeam;
}
