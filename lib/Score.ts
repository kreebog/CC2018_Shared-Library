import { format } from 'util';
import { IScore } from './IScore';
import { GAME_RESULTS } from './Enums';

export class Score {
    // Primary Key = mazeId:teamId:gameId:gameRound
    private mazeId: string;
    private teamId: string;
    private gameId: string;
    private gameRound: number;
    private scoreKey: string;
    private lastUpdated: number;
    private gameResult: GAME_RESULTS;
    private moveCount: number;
    private backtrackCount: number;
    private bonusPoints: number;

    /**         Accessors         **/
    public getBacktrackCount(): number {
        return this.backtrackCount;
    }
    public setBacktrackCount(value: number) {
        this.lastUpdated = Date.now();
        this.backtrackCount = value;
    }
    public addBacktrack() {
        this.backtrackCount++;
    }

    public getMazeId(): string {
        return this.mazeId;
    }
    public setMazeId(value: string) {
        this.mazeId = value;
        this.scoreKey = this.generateScoreKey();
    }

    public getTeamId(): string {
        return this.teamId;
    }
    public setTeamId(value: string) {
        this.teamId = value;
        this.scoreKey = this.generateScoreKey();
    }

    public getGameId(): string {
        return this.gameId;
    }
    public setGameId(value: string) {
        this.gameId = value;
        this.scoreKey = this.generateScoreKey();
    }

    public getGameRound(): number {
        return this.gameRound;
    }
    public setGameRound(value: number) {
        this.gameRound = value;
        this.scoreKey = this.generateScoreKey();
    }

    public setMoveCount(count: number) {
        this.lastUpdated = Date.now();
        this.moveCount = count;
    }
    public getMoveCount(): number {
        return this.moveCount;
    }
    public addMove() {
        this.lastUpdated = Date.now();
        this.moveCount++;
    }

    public getBonusPoints(): number {
        return this.bonusPoints;
    }
    public setBonusPoints(value: number) {
        this.lastUpdated = Date.now();
        this.bonusPoints = value;
    }

    public getGameResult(): GAME_RESULTS {
        return this.gameResult;
    }
    public setGameResult(value: GAME_RESULTS) {
        this.lastUpdated = Date.now();
        this.gameResult = value;
    }

    public getScoreKey(): string {
        return this.scoreKey;
    }
    private generateScoreKey(): string {
        this.lastUpdated = Date.now();
        return format('%s:%s:%s:%s', this.mazeId, this.teamId, this.gameId, this.gameRound);
    }

    constructor(data?: IScore) {
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
        } else {
            this.mazeId = '';
            this.teamId = '';
            this.gameId = '';
            this.gameRound = 1;
            this.lastUpdated = -1;

            // generate the score key from maze, team, game, and round
            this.scoreKey = 'SCORE_KEY_NOT_SET';

            // set the current score values
            this.gameResult = GAME_RESULTS.IN_PROGRESS;
            this.moveCount = 0;
            this.bonusPoints = 0;
            this.backtrackCount = 0;
        }
    }

    public toJSON(): IScore {
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
