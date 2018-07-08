import { IBot } from './IBot';
import { ITeam } from './ITeam';
export declare class Team {
    private name;
    private id;
    private logo;
    private bots;
    getId(): string;
    getName(): string;
    getBots(): Array<IBot>;
    getLogo(): string;
    constructor(data?: ITeam);
    toJSON(): ITeam;
}
