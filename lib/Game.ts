import { GAME_STATES, GAME_RESULTS } from "./Enums";
let uuid = require("uuid/v4");

export class Game {
  private id: string;
  private state: GAME_STATES;
  private result: GAME_RESULTS;

  constructor() {
    this.id = uuid();
    this.state = GAME_STATES.NEW;
    this.result = GAME_RESULTS.IN_PROGRESS;
  }

  public getId() {
    return this.id;
  }

  public getState() {
    return this.state;
  }

  public getResult() {
    return this.result;
  }
}
