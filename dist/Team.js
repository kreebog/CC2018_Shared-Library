"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
const v4_1 = __importDefault(require("uuid/v4"));
let Trophies = new Array({ id: 0, name: 'Wasted Time', description: "You weren't in too much of a hurry to stop and dance, or smell the flowers, or practice your moonwalk...", count: 1 }, { id: 1, name: 'A Nervous Walk', description: 'You kept looking back over your shoulder - worried about the lava?', count: 1 }, { id: 2, name: 'Watching Paint Dry', description: 'Why did you stare at the wall? Why? WHY?!', count: 1 }, { id: 4, name: 'Wishful Thinking', description: "You thought about trying to walk out through the entrance, didn't you?", count: 1 }, { id: 8, name: 'Wishful Dying', description: 'You actually TRIED to walk back out through the entrance! We told you there was LAVA!', count: 1 }, { id: 16, name: 'Winner, Winner, Cheddar Dinner', description: 'You escaped the maze!', count: 1 }, { id: 32, name: 'Perfect Run', description: 'You beat a maze in the shortest possible number of moves. NICE!', count: 1 });
class Team {
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBots() {
        return this.bots;
    }
    getLogo() {
        return this.logo;
    }
    addTrophy(trophyId) {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                this.trophies[x].count++;
                return;
            }
        }
        this.trophies.push(Trophies[trophyId]);
    }
    getTrophoies() {
        return this.trophies;
    }
    constructor(data) {
        if (data !== undefined) {
            this.name = data.name;
            this.bots = data.bots;
            this.id = data.id;
            this.logo = data.logo;
            this.trophies = data.trophies;
        }
        else {
            this.name = '';
            this.id = v4_1.default();
            this.bots = new Array();
            this.logo = '';
            this.trophies = new Array();
        }
        if (this.trophies === undefined)
            this.trophies = new Array();
    }
    toJSON() {
        let data = {
            name: this.name,
            id: this.id,
            logo: this.logo,
            trophies: this.trophies,
            bots: this.bots
        };
        return data;
    }
}
exports.Team = Team;
