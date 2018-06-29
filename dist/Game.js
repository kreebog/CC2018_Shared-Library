"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
let uuid = require("uuid/v4");
class Game {
    constructor() {
        this.id = uuid();
        this.state = Enums_1.GAME_STATES.NEW;
        this.result = Enums_1.GAME_RESULTS.IN_PROGRESS;
    }
    getId() {
        return this.id;
    }
    getState() {
        return this.state;
    }
    getResult() {
        return this.result;
    }
}
exports.Game = Game;
