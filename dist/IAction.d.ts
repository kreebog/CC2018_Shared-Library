import { PLAYER_STATES } from './Enums';
import { IEngram } from './IEngram';
import { IScore } from './IScore';
import { Pos } from './Pos';
export interface IAction {
    action: string;
    direction: string;
    engram: IEngram;
    location: Pos;
    mazeId: string;
    score: IScore;
    playerState: PLAYER_STATES;
    outcome: Array<string>;
}