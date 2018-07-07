import { IScore } from './IScore';
import { GAME_RESULTS } from './Enums';
export declare class Score {
    private mazeId;
    private teamId;
    private gameId;
    private gameRound;
    private scoreKey;
    private gameResult;
    private moveCount;
    private backtrackCount;
    private bonusPoints;
    getBacktrackCount(): number;
    setBacktrackCount(value: number): void;
    /**         Accessors         **/
    getMazeId(): string;
    setMazeId(value: string): void;
    getTeamId(): string;
    setTeamId(value: string): void;
    getGameId(): string;
    setGameId(value: string): void;
    getGameRound(): number;
    setGameRound(value: number): void;
    getMoveCount(): number;
    setMoveCount(value: number): void;
    getBackTrackCount(): number;
    setBackTrackCount(value: number): void;
    getBonusPoints(): number;
    setBonusPoints(value: number): void;
    getGameResult(): GAME_RESULTS;
    setGameResult(value: GAME_RESULTS): void;
    getScoreKey(): string;
    private generateScoreKey;
    constructor(data?: IScore);
    toJSON(): IScore;
}
