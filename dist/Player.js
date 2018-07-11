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
    addState(state) {
        if (!(this.state & state)) {
            this.state += state;
            console.debug(__filename, 'addState()', Enums_1.PLAYER_STATES[state] + ' added.');
        }
    }
    removeState(state) {
        if (!!(this.state & state)) {
            this.state -= state;
            console.debug(__filename, 'removeState()', Enums_1.PLAYER_STATES[state] + ' removed.');
        }
    }
}
exports.Player = Player;
