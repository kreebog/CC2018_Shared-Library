/**
 * Team is an individual code-camp team that includes a collection of Bots
 */ 
import { Bot } from './Bot';

export interface ITeam {
    name: string;
    id: number;
    members: Array<Bot>;
}