import { format } from 'util';
import { Enums } from './Enums';
import { DIRS, TAGS, GAME_STATES, GAME_RESULTS } from './Enums';
import { Maze } from './Maze';
import { IMaze } from './IMaze';
import { Team } from './Team';
import { Score } from './Score';
import { Logger } from './Logger';
import { Pos } from './Pos';
import { IGameStub } from './IGameStub';
import { Player } from './Player';
import { IAction } from './IAction';

let uuid = require('uuid/v4');

const enums = Enums.getInstance();
const log = Logger.getInstance();

export class Game {
    private id: string;
    private state: GAME_STATES;
    private result: GAME_RESULTS;
    private maze: Maze;
    private team: Team;
    private score: Score;
    private player: Player;
    private actions: Array<IAction>;

    constructor(maze: Maze, team: Team, player: Player, score: Score) {
        this.id = uuid();
        this.state = GAME_STATES.NEW;
        this.result = GAME_RESULTS.IN_PROGRESS;
        this.maze = maze;
        this.player = player;
        this.team = team;
        this.score = new Score();
        this.actions = new Array<IAction>();

        log.debug(__filename, 'constructor()', 'New Game instance created.  Id: ' + this.id);
    }

    public getId() {
        return this.id;
    }

    public addAction(action: IAction) {
        this.actions.push(action);
    }

    public getAction(moveNumber: number): IAction {
        return this.actions[moveNumber];
    }

    public getActions(): Array<IAction> {
        return this.actions;
    }

    public getActionsSince(moveNumber: number): Array<IAction> {
        let ret: Array<IAction> = new Array<IAction>();
        moveNumber--;
        if (moveNumber < 0) moveNumber = 0;

        if (moveNumber >= this.actions.length) moveNumber = this.actions.length - 1;
        for (let x = moveNumber; x < this.actions.length; x++) {
            ret.push(this.actions[x]);
        }

        return ret;
    }

    public getActionsRange(start: number, count: number): Array<IAction> {
        let ret: Array<IAction> = new Array<IAction>();

        if (start < 1) start = 1;
        if (count < 1) count = 1;

        start = start - 1;
        for (start; start < count; start++) {
            console.log('start:%d, count:%d', start, count);
            if (start <= this.actions.length) ret.push(this.actions[start]);
        }

        return ret;
    }

    // useful for testing - forces the ID to the given value
    public forceSetId(forcedId: string) {
        this.id = forcedId;
    }

    public getState() {
        return this.state;
    }

    public getResult() {
        return this.result;
    }

    public setState(gameState: GAME_STATES) {
        this.state = gameState;
    }

    public setResult(gameResult: GAME_RESULTS) {
        this.result = gameResult;
    }

    public getMaze(): Maze {
        return this.maze;
    }

    public getIMaze(): IMaze {
        return this.maze.toJSON();
    }

    public getTeam(): Team {
        return this.team;
    }

    public getScore(): Score {
        return this.score;
    }

    public getPlayer(): Player {
        return this.player;
    }

    public getGameStub(): IGameStub {
        let stub: IGameStub = {
            gameId: this.id,
            gameState: this.state,
            mazeStub: this.maze.getMazeStub(),
            team: this.team.toJSON(),
            score: this.score.toJSON(),
            url: ''
        };

        return stub;
    }

    private updatePos(pos: Pos, dir: DIRS): Pos {
        return new Pos(0, 0);
    }
}
