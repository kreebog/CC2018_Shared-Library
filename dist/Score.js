"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const Enums_1 = require("./Enums");
class Score {
    /**         Accessors         **/
    getBacktrackCount() {
        return this.backtrackCount;
    }
    setBacktrackCount(value) {
        this.backtrackCount = value;
    }
    addBacktrack() {
        this.backtrackCount++;
    }
    getMazeId() {
        return this.mazeId;
    }
    setMazeId(value) {
        this.mazeId = value;
        this.scoreKey = this.generateScoreKey();
    }
    getTeamId() {
        return this.teamId;
    }
    setTeamId(value) {
        this.teamId = value;
        this.scoreKey = this.generateScoreKey();
    }
    getGameId() {
        return this.gameId;
    }
    setGameId(value) {
        this.gameId = value;
        this.scoreKey = this.generateScoreKey();
    }
    getGameRound() {
        return this.gameRound;
    }
    setGameRound(value) {
        this.gameRound = value;
        this.scoreKey = this.generateScoreKey();
    }
    setMoveCount(count) {
        this.moveCount = count;
    }
    getMoveCount() {
        return this.moveCount;
    }
    addMove() {
        this.moveCount++;
    }
    getBonusPoints() {
        return this.bonusPoints;
    }
    setBonusPoints(value) {
        this.bonusPoints = value;
    }
    getGameResult() {
        return this.gameResult;
    }
    setGameResult(value) {
        this.gameResult = value;
    }
    getScoreKey() {
        return this.scoreKey;
    }
    generateScoreKey() {
        return util_1.format('%s:%s:%s:%s', this.mazeId, this.teamId, this.gameId, this.gameRound);
    }
    constructor(data) {
        if (data !== undefined) {
            this.mazeId = data.mazeId;
            this.teamId = data.teamId;
            this.gameId = data.gameId;
            this.gameRound = data.gameRound;
            this.lastUpdated = data.lastUpdated;
            // generate the score key from maze, team, game, and round
            this.scoreKey = this.generateScoreKey();
            // set the current score values
            this.gameResult = data.gameResult;
            this.moveCount = data.moveCount;
            this.bonusPoints = data.bonusPoints;
            this.backtrackCount = data.backtrackCount;
        }
        else {
            this.mazeId = '';
            this.teamId = '';
            this.gameId = '';
            this.gameRound = 0;
            this.lastUpdated = -1;
            // generate the score key from maze, team, game, and round
            this.scoreKey = 'SCORE_KEY_NOT_SET';
            // set the current score values
            this.gameResult = Enums_1.GAME_RESULTS.IN_PROGRESS;
            this.moveCount = 0;
            this.bonusPoints = 0;
            this.backtrackCount = 0;
        }
    }
    toJSON() {
        let data = {
            mazeId: this.mazeId,
            teamId: this.teamId,
            gameId: this.gameId,
            gameRound: this.gameRound,
            scoreKey: this.scoreKey,
            gameResult: this.gameResult,
            moveCount: this.moveCount,
            backtrackCount: this.backtrackCount,
            bonusPoints: this.bonusPoints,
            lastUpdated: this.lastUpdated
        };
        return data;
    }
}
exports.Score = Score;
