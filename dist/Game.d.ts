import { DIRS, GAME_STATES, GAME_RESULTS } from './Enums';
import { IMaze } from './IMaze';
import { Team } from './Team';
import { Score } from './Score';
import { Pos } from './Pos';
import { IGameStub } from './IGameStub';
export declare class Game {
    private id;
    private state;
    private result;
    private maze;
    private team;
    private score;
    private playerPos;
    constructor(mazeData: IMaze, team: Team, score: Score);
    getId(): string;
    forceSetId(forcedId: string): void;
    getState(): GAME_STATES;
    getResult(): GAME_RESULTS;
    setState(gameState: GAME_STATES): void;
    setResult(gameResult: GAME_RESULTS): void;
    getMaze(): IMaze;
    getTeam(): Team;
    getScore(): Score;
    setPlayerPos(playerPos: Pos): void;
    getPlayerPos(): Pos;
    isOpenDir(dir: DIRS): boolean;
    getGameStub(): IGameStub;
    private updatePos;
}
