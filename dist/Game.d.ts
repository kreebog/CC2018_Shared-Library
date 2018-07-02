import { GAME_STATES, GAME_RESULTS } from './Enums';
import { IMaze } from './IMaze';
import { Team } from './Team';
import { Score } from './Score';
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
    getState(): GAME_STATES;
    getResult(): GAME_RESULTS;
    getMaze(): IMaze;
    getTeam(): Team;
    getScore(): Score;
    getPlayerPos(): {
        row: number;
        col: number;
    };
}
