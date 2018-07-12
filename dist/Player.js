"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    addState(state) {
        if (!(this.state & state)) {
            this.state += state;
        }
    }
    removeState(state) {
        if (!!(this.state & state)) {
            this.state -= state;
        }
    }
}
exports.Player = Player;
