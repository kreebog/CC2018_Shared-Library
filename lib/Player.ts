import { format } from 'util';
import { Pos } from './Pos';
import { PLAYER_STATES } from './Enums';

// Class to maintain player state during a game
export class Player {
    private location: Pos;
    public get Location(): Pos {
        return this.location;
    }
    public set Location(value: Pos) {
        this.location = value;
    }

    private state: PLAYER_STATES;
    public get State(): PLAYER_STATES {
        return this.state;
    }

    constructor(location: Pos, state: PLAYER_STATES) {
        this.location = location;
        this.state = state;
    }

    public addState(state: PLAYER_STATES) {
        if (!(this.state & state)) {
            this.state += state;
            if (state == PLAYER_STATES.SITTING) {
                this.removeState(PLAYER_STATES.STANDING);
                this.removeState(PLAYER_STATES.LYING);
            }
            if (state == PLAYER_STATES.LYING) {
                this.removeState(PLAYER_STATES.STANDING);
                this.removeState(PLAYER_STATES.SITTING);
            }
            if (state == PLAYER_STATES.STANDING) {
                this.removeState(PLAYER_STATES.SITTING);
                this.removeState(PLAYER_STATES.LYING);
            }
        }
    }

    public removeState(state: PLAYER_STATES) {
        if (!!(this.state & state)) {
            this.state -= state;
        }
    }
}
