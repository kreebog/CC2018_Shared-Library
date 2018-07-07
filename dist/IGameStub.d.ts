import { GAME_STATES } from './Enums';
import { IMazeStub } from './IMazeStub';
import { ITeam } from './ITeam';
import { IScore } from './IScore';
export interface IGameStub {
    gameId: string;
    mazeStub: IMazeStub;
    team: ITeam;
    gameState: GAME_STATES;
    score: IScore;
    url: string;
}
