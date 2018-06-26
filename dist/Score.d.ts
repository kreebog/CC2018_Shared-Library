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
    BacktrackCount: number;
    /**         Accessors         **/
    MazeId: string;
    TeamId: string;
    GameId: string;
    GameRound: number;
    MoveCount: number;
    BackTrackCount: number;
    BonusPoints: number;
    GameResult: GAME_RESULTS;
    readonly ScoreKey: string;
    private setScoreKey;
    constuctor(): void;
    loadFromJSON(json: string): void;
}
