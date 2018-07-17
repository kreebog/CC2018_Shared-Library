import { format } from 'util';
import { Enums, PLAYER_STATES } from './Enums';
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
    private maze: Maze;
    private team: Team;
    private score: Score;
    private player: Player;
    private actions: Array<IAction>;
    private botId: string;
    private round: number;
    private lastAccessed: number;

    constructor(maze: Maze, team: Team, player: Player, score: Score, round: number, botId?: string) {
        this.id = uuid();
        this.state = GAME_STATES.NEW;
        this.maze = maze;
        this.player = player;
        this.team = team;
        this.score = new Score();
        this.actions = new Array<IAction>();
        this.lastAccessed = Date.now();
        this.round = round;
        this.botId = botId === undefined ? '' : botId;

        if (this.botId != '') {
            log.debug(__filename, 'constructor()', 'New TEAM GAME instance created.  Id: ' + this.id);
        } else {
            log.debug(__filename, 'constructor()', 'New TEAM-BOT GAME instance created.  Id: ' + this.id);
        }
    }

    public getRound() {
        this.lastAccessed = Date.now();
        return this.round;
    }

    /**
     * New game round - resets actions, score, player state, and player location
     */
    public nextRound(): number {
        this.lastAccessed = Date.now();
        this.round++;
        this.state == GAME_STATES.NEW;
        this.actions = new Array<IAction>();
        this.score = new Score();

        // reset player to standing
        this.player.clearStates();
        this.player.addState(PLAYER_STATES.STANDING);

        //player moves back to start cell
        this.player.Location = this.maze.getStartCell();

        // set score round to match game round
        this.score.setGameRound(this.round);

        return this.round;
    }

    public getLastAccessTime() {
        this.lastAccessed = Date.now();
        return this.lastAccessed;
    }

    public getId() {
        this.lastAccessed = Date.now();
        return this.id;
    }

    public getBotId() {
        this.lastAccessed = Date.now();
        return this.botId;
    }

    public addAction(action: IAction) {
        if (this.state == GAME_STATES.NEW) this.state = GAME_STATES.IN_PROGRESS;
        this.lastAccessed = Date.now();
        this.actions.push(action);
    }

    public getAction(moveNumber: number): IAction {
        this.lastAccessed = Date.now();
        return this.actions[moveNumber];
    }

    public getActions(): Array<IAction> {
        this.lastAccessed = Date.now();
        return this.actions;
    }

    public getActionsSince(moveNumber: number): Array<IAction> {
        this.lastAccessed = Date.now();
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
        this.lastAccessed = Date.now();
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

    public getStub(gameServerExtUrl: string): IGameStub {
        // no last access check here because this method is used by cache manager
        let stub: IGameStub = {
            gameId: this.getId(),
            team: this.getTeam().toJSON(),
            gameState: this.getState(),
            score: this.getScore().toJSON(),
            mazeStub: this.getMaze().getMazeStub(),
            url: format('%s/%s/%s', gameServerExtUrl, 'game', this.getId())
        };

        return stub;
    }

    // useful for testing - forces the ID to the given value
    public forceSetId(forcedId: string) {
        this.id = forcedId;
        this.lastAccessed = Date.now();
    }

    public getState() {
        // no last access update here because this function is used by cache manager
        return this.state;
    }

    public setState(gameState: GAME_STATES) {
        this.lastAccessed = Date.now();
        this.state = gameState;
    }

    public getMaze(): Maze {
        this.lastAccessed = Date.now();
        return this.maze;
    }

    public getIMaze(): IMaze {
        this.lastAccessed = Date.now();
        return this.maze.toJSON();
    }

    public getTeam(): Team {
        this.lastAccessed = Date.now();
        return this.team;
    }

    public getScore(): Score {
        this.lastAccessed = Date.now();
        return this.score;
    }

    public getPlayer(): Player {
        this.lastAccessed = Date.now();
        return this.player;
    }
}
