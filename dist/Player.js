"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
// Class to maintain player state during a game
class Player {
    get Location() {
        return this.location;
    }
    set Location(value) {
        this.location = value;
    }
    get State() {
        return this.state;
    }
    constructor(location, state) {
        this.location = location;
        this.state = state;
    }
    clearStates() {
        this.state = Enums_1.PLAYER_STATES.NONE;
    }
    addState(state) {
        if (!(this.state & state)) {
            this.state += state;
            if (state == Enums_1.PLAYER_STATES.SITTING) {
                this.removeState(Enums_1.PLAYER_STATES.STANDING);
                this.removeState(Enums_1.PLAYER_STATES.LYING);
            }
            if (state == Enums_1.PLAYER_STATES.LYING) {
                this.removeState(Enums_1.PLAYER_STATES.STANDING);
                this.removeState(Enums_1.PLAYER_STATES.SITTING);
            }
            if (state == Enums_1.PLAYER_STATES.STANDING) {
                this.removeState(Enums_1.PLAYER_STATES.SITTING);
                this.removeState(Enums_1.PLAYER_STATES.LYING);
            }
        }
    }
    removeState(state) {
        if (!!(this.state & state)) {
            this.state -= state;
        }
    }
}
exports.Player = Player;
