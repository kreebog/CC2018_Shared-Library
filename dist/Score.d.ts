import { IScore } from './IScore';
import { GAME_RESULTS } from './Enums';
export declare class Score {
    private mazeId;
    private teamId;
    private gameId;
    private gameRound;
    private scoreKey;
    private lastUpdated;
    private gameResult;
    private moveCount;
    private backtrackCount;
    private bonusPoints;
    /**         Accessors         **/
    getBacktrackCount(): number;
    setBacktrackCount(value: number): void;
    addBacktrack(): void;
    getMazeId(): string;
    setMazeId(value: string): void;
    getTeamId(): string;
    setTeamId(value: string): void;
    getGameId(): string;
    setGameId(value: string): void;
    getGameRound(): number;
    setGameRound(value: number): void;
    setMoveCount(count: number): void;
    getMoveCount(): number;
    addMove(): void;
    getBonusPoints(): number;
    setBonusPoints(value: number): void;
    getGameResult(): GAME_RESULTS;
    setGameResult(value: GAME_RESULTS): void;
    getScoreKey(): string;
    private generateScoreKey;
    constructor(data?: IScore);
    toJSON(): IScore;
}
