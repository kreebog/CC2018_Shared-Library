"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const Enums_1 = require("./Enums");
const Enums_2 = require("./Enums");
const Score_1 = require("./Score");
const Logger_1 = require("./Logger");
let uuid = require('uuid/v4');
const enums = Enums_1.Enums.getInstance();
const log = Logger_1.Logger.getInstance();
class Game {
    constructor(maze, team, player, score) {
        this.id = uuid();
        this.state = Enums_2.GAME_STATES.NEW;
        this.maze = maze;
        this.player = player;
        this.team = team;
        this.score = new Score_1.Score();
        this.actions = new Array();
        this.lastUpdated = -1;
        log.debug(__filename, 'constructor()', 'New Game instance created.  Id: ' + this.id);
    }
    getId() {
        return this.id;
    }
    addAction(action) {
        this.lastUpdated = Date.now();
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
        moveNumber--;
        if (moveNumber < 0)
            moveNumber = 0;
        if (moveNumber >= this.actions.length)
            moveNumber = this.actions.length - 1;
        for (let x = moveNumber; x < this.actions.length; x++) {
            ret.push(this.actions[x]);
        }
        return ret;
    }
    getActionsRange(start, count) {
        let ret = new Array();
        if (start < 1)
            start = 1;
        if (count < 1)
            count = 1;
        start = start - 1;
        for (start; start < count; start++) {
            console.log('start:%d, count:%d', start, count);
            if (start <= this.actions.length)
                ret.push(this.actions[start]);
        }
        return ret;
    }
    getStub(gameServerExtUrl) {
        let stub = {
            gameId: this.getId(),
            team: this.getTeam().toJSON(),
            gameState: this.getState(),
            score: this.getScore().toJSON(),
            mazeStub: this.getMaze().getMazeStub(),
            url: util_1.format('%s/%s/%s', gameServerExtUrl, 'game', this.getId())
        };
        return stub;
    }
    // useful for testing - forces the ID to the given value
    forceSetId(forcedId) {
        this.id = forcedId;
    }
    getState() {
        return this.state;
    }
    setState(gameState) {
        this.lastUpdated = Date.now();
        this.state = gameState;
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
}
exports.Game = Game;
