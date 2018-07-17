import { GAME_STATES } from './Enums';
import { Maze } from './Maze';
import { IMaze } from './IMaze';
import { Team } from './Team';
import { Score } from './Score';
import { IGameStub } from './IGameStub';
import { Player } from './Player';
import { IAction } from './IAction';
export declare class Game {
    private id;
    private state;
    private maze;
    private team;
    private score;
    private player;
    private actions;
    private botId;
    private round;
    private lastAccessed;
    constructor(maze: Maze, team: Team, player: Player, score: Score, round: number, botId?: string);
    getRound(): number;
    /**
     * New game round - resets actions, score, player state, and player location
     */
    nextRound(): number;
    getLastAccessTime(): number;
    getId(): string;
    getBotId(): string;
    addAction(action: IAction): void;
    getAction(moveNumber: number): IAction;
    getActions(): Array<IAction>;
    getActionsSince(moveNumber: number): Array<IAction>;
    getActionsRange(start: number, count: number): Array<IAction>;
    getStub(gameServerExtUrl: string): IGameStub;
    forceSetId(forcedId: string): void;
    getState(): GAME_STATES;
    setState(gameState: GAME_STATES): void;
    getMaze(): Maze;
    getIMaze(): IMaze;
    getTeam(): Team;
    getScore(): Score;
    getPlayer(): Player;
}
