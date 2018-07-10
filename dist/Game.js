"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const Enums_1 = require("./Enums");
const Enums_2 = require("./Enums");
const Maze_1 = require("./Maze");
const Score_1 = require("./Score");
const Logger_1 = require("./Logger");
const Pos_1 = require("./Pos");
let uuid = require('uuid/v4');
const enums = Enums_1.Enums.getInstance();
const log = Logger_1.Logger.getInstance();
class Game {
    constructor(mazeData, team, score) {
        this.id = uuid();
        this.state = Enums_2.GAME_STATES.NEW;
        this.result = Enums_2.GAME_RESULTS.IN_PROGRESS;
        this.maze = new Maze_1.Maze().loadFromJSON(mazeData);
        this.playerPos = mazeData.startCell;
        this.team = team;
        this.score = new Score_1.Score();
        log.debug(__filename, 'constructor()', 'New Game instance created.  Id: ' + this.id);
    }
    getId() {
        return this.id;
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
    doMove(dir) {
        log.debug(__filename, util_1.format('doMove(%d)', dir), util_1.format('Attempting player move to the %s from cell at %d, %d ', Enums_2.DIRS[dir], this.playerPos.row, this.playerPos.col));
        if (this.isOpenDir(dir)) {
            this.playerPos;
        }
    }
    isOpenDir(dir) {
        let open = false;
        let cLoc = this.getPlayerPos();
        let cell = this.maze.getCell(cLoc.col, cLoc.row);
        if (dir == Enums_2.DIRS.NORTH)
            open = cLoc.row > 0 && !!(cell.getExits() & dir);
        if (dir == Enums_2.DIRS.SOUTH)
            open = cLoc.row < this.maze.getHeight() - 1 && !!(cell.getExits() & dir);
        if (dir == Enums_2.DIRS.EAST)
            open = cLoc.col < this.maze.getWidth() - 1 && !!(cell.getExits() & dir);
        if (dir == Enums_2.DIRS.WEST)
            open = cLoc.col > 0 && !!(cell.getExits() & dir);
        log.debug(__filename, util_1.format('isOpenDir(%d)', dir), util_1.format('Open exit %s from cell at %d, %d?  %s', open));
        return open;
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
