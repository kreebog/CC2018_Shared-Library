"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Team is an individual code-camp team that includes a collection of Bots
 */
const v4_1 = __importDefault(require("uuid/v4"));
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
    constructor(data) {
        if (data !== undefined) {
            this.name = data.name;
            this.bots = data.bots;
            this.id = data.id;
        }
        else {
            this.name = '';
            this.id = v4_1.default();
            this.bots = new Array();
        }
    }
    toJSON() {
        let data = {
            name: this.name,
            id: this.id,
            bots: this.bots
        };
        return data;
    }
}
exports.Team = Team;
