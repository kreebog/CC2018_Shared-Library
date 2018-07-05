import { format } from "util";
import { Enums } from "./Enums";
import { DIRS, TAGS, GAME_STATES, GAME_RESULTS } from "./Enums";
import { Maze } from "./Maze";
import { IMaze } from "./IMaze";
import { Team } from "./Team";
import { Score } from "./Score";
import { Logger } from "./Logger";
import { Pos } from "./Pos";

let uuid = require("uuid/v4");

const enums = Enums.getInstance();
const log = Logger.getInstance();

export class Game {
    private id: string;
    private state: GAME_STATES;
    private result: GAME_RESULTS;
    private maze: Maze;
    private team: Team;
    private score: Score;
    private playerPos: Pos;

    constructor(mazeData: IMaze, team: Team, score: Score) {
        //TODO: Re-enable this!  this.id = uuid();
        this.id = "AAA";
        this.state = GAME_STATES.NEW;
        this.result = GAME_RESULTS.IN_PROGRESS;
        this.maze = new Maze().loadFromJSON(mazeData);
        this.playerPos = mazeData.startCell;
        this.team = team;
        this.score = new Score();

        log.debug(__filename, "constructor()", "New Game instance created.  Id: " + this.id);
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

    public getTeam(): Team {
        return this.team;
    }

    public getScore(): Score {
        return this.score;
    }

    public getPlayerPos(): Pos {
        return this.playerPos;
    }

    public doMove(dir: DIRS) {
        log.debug(
            __filename,
            format("doMove(%d)", dir),
            format(
                "Attempting player move to the %s from cell at %d, %d ",
                DIRS[dir],
                this.playerPos.row,
                this.playerPos.col
            )
        );
        if (this.isOpenDir(dir)) {
            this.playerPos;
        }
    }

    public isOpenDir(dir: DIRS): boolean {
        let open = false;
        let cLoc = this.getPlayerPos();
        let cell = this.maze.getCell(cLoc.col, cLoc.row);

        if (dir == DIRS.NORTH) open = cLoc.row > 0 && !!(cell.getExits() & dir);
        if (dir == DIRS.SOUTH) open = cLoc.row < this.maze.getHeight() - 1 && !!(cell.getExits() & dir);
        if (dir == DIRS.EAST) open = cLoc.col < this.maze.getWidth() - 1 && !!(cell.getExits() & dir);
        if (dir == DIRS.WEST) open = cLoc.col > 0 && !!(cell.getExits() & dir);

        log.debug(__filename, format("isOpenDir(%d)", dir), format("Open exit %s from cell at %d, %d?  %s", open));
        return open;
    }

    private updatePos(pos: Pos, dir: DIRS): Pos {
        return new Pos(0, 0);
    }
}
