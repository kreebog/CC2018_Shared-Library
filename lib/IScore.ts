import { GAME_RESULTS } from './Enums';

export interface IScore {
    // Primary Key = mazeId:teamId:gameId:gameRound
    mazeId: string;
    teamId: string;
    gameId: string;
    gameRound: number;
    scoreKey: string;

    // the final result of the game 
    gameResult: GAME_RESULTS;

    // various score elements
    moveCount: number;
    backtrackCount: number;
    bonusPoints: number;
}
