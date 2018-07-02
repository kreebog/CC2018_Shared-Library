"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Team {
    getTeamId() {
        return this.id;
    }
    getTeamName() {
        return this.name;
    }
    getTeamMembers() {
        return this.members;
    }
    constructor(name, id, members) {
        this.name = name;
        this.id = id;
        this.members = members;
    }
}
exports.Team = Team;
