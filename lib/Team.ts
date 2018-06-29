/**
 * Team is an individual code-camp team that includes a collection of Bots
 */ 
import { Bot } from './Bot';

export class Team {
    private name: string;
    private id: string;
    private members: Array<Bot>;

    constructor(name: string, id: string, members: Array<Bot>){ 
        this.name = name;
        this.id = id;
        this.members = members;
    }
}