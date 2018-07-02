/**
 * Team is an individual code-camp team that includes a collection of Bots
 */ 
import { Bot } from './Bot';

export class Team {
    private name: string;
    private id: number;
    private members: Array<Bot>;

    public getTeamId() { 
        return this.id;
    }

    public getTeamName() {
        return this.name;
    }

    public getTeamMembers() {
        return this.members;
    }

    constructor(name: string, id: number, members: Array<Bot>){ 
        this.name = name;
        this.id = id;
        this.members = members;
    }
}