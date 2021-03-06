"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
const v4_1 = __importDefault(require("uuid/v4"));
const ITrophy_1 = require("./ITrophy");
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
        this.trophies.push(ITrophy_1.Trophies[trophyId]);
    }
    getTrophy(trophyId) {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                return this.trophies[x];
            }
        }
        return null;
    }
    hasTrophy(trophyId) {
        for (let x = 0; x < this.trophies.length; x++) {
            if (this.trophies[x].id == trophyId) {
                return true;
            }
        }
        return false;
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
