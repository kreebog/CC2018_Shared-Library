"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
const Enums_2 = require("./Enums");
const Score_1 = require("./Score");
const Logger_1 = require("./Logger");
const Pos_1 = require("./Pos");
let uuid = require('uuid/v4');
const enums = Enums_1.Enums.getInstance();
const log = Logger_1.Logger.getInstance();
class Game {
    constructor(maze, team, player, score) {
        this.id = uuid();
        this.state = Enums_2.GAME_STATES.NEW;
        this.result = Enums_2.GAME_RESULTS.IN_PROGRESS;
        this.maze = maze;
        this.player = player;
        this.team = team;
        this.score = new Score_1.Score();
        this.actions = new Array();
        log.debug(__filename, 'constructor()', 'New Game instance created.  Id: ' + this.id);
    }
    getId() {
        return this.id;
    }
    addAction(action) {
        this.actions.push(action);
    }
    getAction(moveNumber) {
        return this.actions[moveNumber];
    }
    getActions() {
        return this.actions;
    }
    getActionsSince(moveNumber) {
        let ret = new Array();
        if (moveNumber >= this.actions.length)
            moveNumber = this.actions.length - 1;
        for (let x = moveNumber; x < this.actions.length; x++) {
            ret.push(this.actions[x]);
        }
        return ret;
    }
    getActionsRange(start, count) {
        let ret = new Array();
        if (count + start >= this.actions.length)
            count = this.actions.length - start - 1;
        for (let x = start; x <= count; x++) {
            ret.push(this.actions[x]);
        }
        return ret;
    }
    // useful for testing - forces the ID to the given value
    forceSetId(forcedId) {
        this.id = forcedId;
    }
    getState() {
        return this.state;
    }
    getResult() {
        return this.result;
    }
    setState(gameState) {
        this.state = gameState;
    }
    setResult(gameResult) {
        this.result = gameResult;
    }
    getMaze() {
        return this.maze;
    }
    getIMaze() {
        return this.maze.toJSON();
    }
    getTeam() {
        return this.team;
    }
    getScore() {
        return this.score;
    }
    getPlayer() {
        return this.player;
    }
    getGameStub() {
        let stub = {
            gameId: this.id,
            gameState: this.state,
            mazeStub: this.maze.getMazeStub(),
            team: this.team.toJSON(),
            score: this.score.toJSON(),
            url: ''
        };
        return stub;
    }
    updatePos(pos, dir) {
        return new Pos_1.Pos(0, 0);
    }
}
exports.Game = Game;
