import { GAME_RESULTS } from './Enums';
export interface IScore {
    mazeId: string;
    teamId: string;
    gameId: string;
    gameRound: number;
    scoreKey: string;
    gameResult: GAME_RESULTS;
    moveCount: number;
    backtrackCount: number;
    bonusPoints: number;
}
