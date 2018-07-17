import { Pos } from './Pos';
import { PLAYER_STATES } from './Enums';
export declare class Player {
    private location;
    Location: Pos;
    private state;
    readonly State: PLAYER_STATES;
    constructor(location: Pos, state: PLAYER_STATES);
    clearStates(): void;
    addState(state: PLAYER_STATES): void;
    removeState(state: PLAYER_STATES): void;
}
