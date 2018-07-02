/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
import { Bot } from './Bot';
export declare class Team {
    private name;
    private id;
    private members;
    getTeamId(): number;
    getTeamName(): string;
    getTeamMembers(): Bot[];
    constructor(name: string, id: number, members: Array<Bot>);
}
