import { GAME_STATES, GAME_RESULTS } from "./Enums";
export declare class Game {
    private id;
    private state;
    private result;
    constructor();
    getId(): string;
    getState(): GAME_STATES;
    getResult(): GAME_RESULTS;
}
