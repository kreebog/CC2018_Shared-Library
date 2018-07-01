import { GAME_STATES, GAME_RESULTS } from './Enums';
import { Maze } from './Maze';
import { IMaze } from './IMaze';
import { Location } from './Location';
let uuid = require("uuid/v4");

export class Game {
  private id: string;
  private state: GAME_STATES;
  private result: GAME_RESULTS;
  private maze: Maze;
  private playerPos: {row:number, col:number};

  constructor(mazeData: IMaze) {
    this.id = uuid();
    this.state = GAME_STATES.NEW;
    this.result = GAME_RESULTS.IN_PROGRESS;
    this.maze = new Maze().loadFromJSON(mazeData);
    this.playerPos = mazeData.startCell;
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

  public getMaze(): IMaze {
    return this.maze.toJSON();
  }

  public getPlayerPos() {
    return this.playerPos;
  }
}
