import { IBot } from './IBot';
import { ITeam } from './ITeam';
export declare class Team {
    private name;
    private id;
    private bots;
    getId(): string;
    getName(): string;
    getBots(): IBot[];
    constructor(data?: ITeam);
}
