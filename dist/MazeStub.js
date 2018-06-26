"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MazeStub - Just the basic maze data - Used where only a list of mazes is needed.
 *
 */
class MazeStub {
    constructor() {
        this.id = '';
        this.height = 0;
        this.width = 0;
        this.seed = '';
        this.url = '';
    }
    // loads object from values given in json string
    loadFromJSON(jsonMaze) {
        let obj = JSON.parse(jsonMaze);
        this.height = obj.height;
        this.width = obj.width;
        this.seed = obj.seed;
        this.id = obj.id;
        this.url = obj.url;
        return this;
    }
    getSeed() {
        return this.seed;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    getId() {
        return this.id;
    }
    getUrl() {
        return this.url;
    }
}
exports.MazeStub = MazeStub;
