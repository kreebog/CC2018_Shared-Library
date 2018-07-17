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
    constructor(maze, team, player, score, round, botId) {
        this.id = uuid();
        this.state = Enums_2.GAME_STATES.NEW;
        this.maze = maze;
        this.player = player;
        this.team = team;
        this.score = new Score_1.Score();
        this.actions = new Array();
        this.lastAccessed = Date.now();
        this.round = round;
        this.botId = botId === undefined ? '' : botId;
        if (this.botId != '') {
            log.debug(__filename, 'constructor()', 'New TEAM GAME instance created.  Id: ' + this.id);
        }
        else {
            log.debug(__filename, 'constructor()', 'New TEAM-BOT GAME instance created.  Id: ' + this.id);
        }
    }
    getRound() {
        this.lastAccessed = Date.now();
        return this.round;
    }
    /**
     * New game round - resets actions, score, player state, and player location
     */
    nextRound() {
        this.lastAccessed = Date.now();
        this.round++;
        this.state == Enums_2.GAME_STATES.NEW;
        this.actions = new Array();
        this.score = new Score_1.Score();
        // reset player to standing
        this.player.clearStates();
        this.player.addState(Enums_1.PLAYER_STATES.STANDING);
        //player moves back to start cell
        this.player.Location = this.maze.getStartCell();
        // set score round to match game round
        this.score.setGameRound(this.round);
        return this.round;
    }
    getLastAccessTime() {
        this.lastAccessed = Date.now();
        return this.lastAccessed;
    }
    getId() {
        this.lastAccessed = Date.now();
        return this.id;
    }
    getBotId() {
        this.lastAccessed = Date.now();
        return this.botId;
    }
    addAction(action) {
        if (this.state == Enums_2.GAME_STATES.NEW)
            this.state = Enums_2.GAME_STATES.IN_PROGRESS;
        this.lastAccessed = Date.now();
        this.actions.push(action);
    }
    getAction(moveNumber) {
        this.lastAccessed = Date.now();
        return this.actions[moveNumber];
    }
    getActions() {
        this.lastAccessed = Date.now();
        return this.actions;
    }
    getActionsSince(moveNumber) {
        this.lastAccessed = Date.now();
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
        this.lastAccessed = Date.now();
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
        // no last access check here because this method is used by cache manager
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
        this.lastAccessed = Date.now();
    }
    getState() {
        // no last access update here because this function is used by cache manager
        return this.state;
    }
    setState(gameState) {
        this.lastAccessed = Date.now();
        this.state = gameState;
    }
    getMaze() {
        this.lastAccessed = Date.now();
        return this.maze;
    }
    getIMaze() {
        this.lastAccessed = Date.now();
        return this.maze.toJSON();
    }
    getTeam() {
        this.lastAccessed = Date.now();
        return this.team;
    }
    getScore() {
        this.lastAccessed = Date.now();
        return this.score;
    }
    getPlayer() {
        this.lastAccessed = Date.now();
        return this.player;
    }
}
exports.Game = Game;
