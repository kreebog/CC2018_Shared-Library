"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
const Maze_1 = require("./Maze");
let uuid = require("uuid/v4");
class Game {
    constructor(mazeData) {
        this.id = uuid();
        this.state = Enums_1.GAME_STATES.NEW;
        this.result = Enums_1.GAME_RESULTS.IN_PROGRESS;
        this.maze = new Maze_1.Maze().loadFromJSON(mazeData);
        this.playerPos = mazeData.startCell;
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
    getPlayerPos() {
        return this.playerPos;
    }
}
exports.Game = Game;
