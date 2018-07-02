"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
const Maze_1 = require("./Maze");
const Score_1 = require("./Score");
let uuid = require("uuid/v4");
class Game {
    constructor(mazeData, team, score) {
        this.id = uuid();
        this.state = Enums_1.GAME_STATES.NEW;
        this.result = Enums_1.GAME_RESULTS.IN_PROGRESS;
        this.maze = new Maze_1.Maze().loadFromJSON(mazeData);
        this.playerPos = mazeData.startCell;
        this.team = team;
        this.score = new Score_1.Score();
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
    getMaze() {
        return this.maze.toJSON();
    }
    getTeam() {
        return this.team;
    }
    getScore() {
        return this.score;
    }
    getPlayerPos() {
        return this.playerPos;
    }
}
exports.Game = Game;
