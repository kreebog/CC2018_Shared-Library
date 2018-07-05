"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = __importDefault(require("uuid/v4"));
/**
 *  Represents an actual, running bot instance within a Team service
 */
class Bot {
    constructor(data) {
        if (data !== undefined) {
            this.id = v4_1.default();
            this.name = data.name;
            this.weight = data.weight;
            this.coder = data.coder;
        }
        else {
            this.id = v4_1.default();
            this.name = '';
            this.weight = 100;
            this.coder = '';
        }
    }
}
exports.Bot = Bot;
