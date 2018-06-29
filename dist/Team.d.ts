/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
import { Bot } from './Bot';
export declare class Team {
    private name;
    private id;
    private members;
    constructor(name: string, id: string, members: Array<Bot>);
}
