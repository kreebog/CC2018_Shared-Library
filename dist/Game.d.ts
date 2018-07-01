import { GAME_STATES, GAME_RESULTS } from './Enums';
import { IMaze } from './IMaze';
export declare class Game {
    private id;
    private state;
    private result;
    private maze;
    private playerPos;
    constructor(mazeData: IMaze);
    getId(): string;
    getState(): GAME_STATES;
    getResult(): GAME_RESULTS;
    getMaze(): IMaze;
    getPlayerPos(): {
        row: number;
        col: number;
    };
}
