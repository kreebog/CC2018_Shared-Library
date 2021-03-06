import { format } from 'util';
import seedrandom from 'seedrandom';
import { Logger } from './Logger';
import { DIRS, TAGS } from './Enums';
import { IMaze } from './IMaze';
import { IMazeStub } from './IMazeStub';
import Cell from './Cell';
import { Pos } from './Pos';
import { ICell } from './ICell';

let recurseDepth = 0; // tracks the level of recursion during path carving
let maxRecurseDepth = 0; // tracks the deepest level of carve recursion seen
let startGenTime = 0; // used to determine time spent generating a maze

// values for the maze solver
let solutionPath: Array<string>; // used for the maze solver
let playerPos: Pos;

// don't let the maze get too big or the server will run out of memory during generation
const MAX_CELL_COUNT = 2500;

// logger and enum singletons
const log = Logger.getInstance();

/**
 * Maze class - the heart of everything!
 */
export class Maze {
    private cells: Array<Array<Cell>>;
    private height: number;
    private width: number;
    private seed: string;
    private challenge: number;
    private textRender: string;
    private id: string;
    private startCell: Pos;
    private finishCell: Pos;
    private shortestPathLength: number;

    /**
     * Instantiates or new or pre-loaded Maze object
     * @param data - IMaze interface pre-filled with required data
     */
    constructor(data?: IMaze) {
        if (data !== undefined) {
            this.height = data.height;
            this.width = data.width;
            this.seed = data.seed;
            this.challenge = data.challenge;
            this.textRender = data.textRender;
            this.id = data.id;
            this.startCell = data.startCell;
            this.finishCell = data.finishCell;
            this.shortestPathLength = data.shortestPathLength;
            this.cells = new Array<Array<Cell>>();
            this.loadCells(data.cells);
        } else {
            this.height = 0;
            this.width = 0;
            this.seed = '';
            this.challenge = 0;
            this.textRender = '';
            this.id = '';
            this.startCell = new Pos(0, 0);
            this.finishCell = new Pos(0, 0);
            this.shortestPathLength = 0;
            this.cells = new Array<Array<Cell>>();
        }
    }

    // actually have to rebuild the entire cells array
    // to repopulate an object from json
    private loadCells(cells: Array<Array<Cell>>) {
        let newCells: Array<Array<Cell>> = new Array<Array<Cell>>();

        // build the empty cells array
        this.cells = new Array(this.height);
        for (let y: number = 0; y < this.height; y++) {
            let row: Array<Cell> = new Array();
            for (let x: number = 0; x < this.width; x++) {
                let cData = JSON.parse(JSON.stringify(cells[y][x]));
                let cell: Cell = new Cell(cData);
                cell.setLocation(x, y);
                row.push(cell);
            }
            this.cells[y] = row;
        }
    }

    /**
     * populate and return base maze data
     */
    public toJSON(): IMaze {
        let mazeData = {
            cells: this.cells,
            height: this.height,
            width: this.width,
            seed: this.seed,
            challenge: this.challenge,
            textRender: this.textRender,
            id: this.id,
            startCell: this.startCell,
            finishCell: this.finishCell,
            shortestPathLength: this.shortestPathLength
        };

        return mazeData;
    }

    public getMazeStub(): IMazeStub {
        let stub = {
            id: this.id,
            height: this.height,
            width: this.width,
            seed: this.seed,
            challenge: this.challenge,
            url: ''
        };

        return stub;
    }

    public getChallengeLevel(): number {
        return this.challenge;
    }

    public setChallengeLevel(challengeLevel: number) {
        this.challenge = challengeLevel;
    }

    // Cell Update Functions
    public getCellVisits(pos: Pos): number {
        return this.cells[pos.row][pos.col].getVisitCount();
    }

    public getStartCell(): Pos {
        return this.startCell;
    }

    public getFinishCell(): Pos {
        return this.finishCell;
    }

    public getSeed(): string {
        return this.seed;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
        return this.width;
    }

    public getId(): string {
        return this.id;
    }

    public getShortestPathLength() {
        return this.shortestPathLength;
    }

    public getCell(pos: Pos): Cell {
        if (pos.row < 0 || pos.row > this.cells.length || pos.col < 0 || pos.col > this.cells[0].length) {
            log.warn(__filename, format('getCell(%d, %d', pos.row, pos.col), 'Invalid cell coordinates given.');
            throw new Error(format('Index Out of Bounds - Invalid cell coordinates given: row:%d, col:%d.'));
        }

        return this.cells[pos.row][pos.col];
    }

    public getCellNeighbor(cell: Cell, dir: DIRS): Cell {
        // move location of next cell according to random direction
        let row = cell.getPos().row;
        let col = cell.getPos().col;

        // find coordinates of the cell in the given direction
        if (dir < DIRS.EAST) row = dir == DIRS.NORTH ? row - 1 : row + 1;
        if (dir > DIRS.SOUTH) col = dir == DIRS.EAST ? col + 1 : col - 1;

        return this.getCell(new Pos(row, col));
    }

    /**
     * Generates a new maze based on the given parameters
     * @param height - The height of the maze grid
     * @param width - The width of the maze grid
     * @param seed - pseudo random number generator seed value.  If empty, maze will be random and unrepeatable
     */
    public generate(height: number, width: number, seed: string, challengeLevel: number): this {
        this.challenge = challengeLevel;

        if (this.cells.length > 0) {
            log.warn(__filename, 'generate()', 'This maze has already been generated.');
            return this;
        }

        log.info(__filename, 'generate()', format('Generating new %d (height) x %d (width) maze with seed "%s"', height, width, seed));
        startGenTime = Date.now();

        // validate height and width and collect errors
        let errors = new Array<string>();
        if (isNaN(height)) throw new Error('Height must be numeric.');
        if (isNaN(width)) throw new Error('Width must be numeric.');

        // set the dimensions
        this.height = height;
        this.width = width;

        // check for size constraint
        if (height * width > MAX_CELL_COUNT) {
            throw new Error(format('MAX CELL COUNT (%d) EXCEEDED!  %d*%d=%d - Please reduce Height and/or Width and try again.', MAX_CELL_COUNT, height, width, height * width));
        }

        // implement random seed
        if (seed && seed.length > 0) {
            this.seed = seed;
            seedrandom(seed, { global: true });
        }

        // set maze's ID
        this.id = format('%d:%d:%s', this.height, this.width, this.seed);

        // build the empty cells array
        this.cells = new Array(height);
        for (let y: number = 0; y < height; y++) {
            let row: Array<Cell> = new Array();
            for (let x: number = 0; x < width; x++) {
                let cell: Cell = new Cell();
                cell.setLocation(x, y);
                row.push(cell);
            }
            this.cells[y] = row;
        }

        log.debug(__filename, 'generate()', format('Generated [%d][%d] grid of %d empty cells.', height, width, height * width));

        // randomize start and finish locations
        let startCol: number = Math.floor(Math.random() * width);
        let finishCol: number = Math.floor(Math.random() * width);

        log.debug(__filename, 'generate()', format('Adding START ([%d][%d]) and FINISH ([%d][%d]) cells.', 0, startCol, height - 1, finishCol));

        // tag start and finish columns (start / finish tags force matching exits on edge)
        this.startCell = new Pos(0, startCol);

        this.cells[0][startCol].addTag(TAGS.START);

        this.finishCell = new Pos(height - 1, finishCol);
        this.cells[height - 1][finishCol].addTag(TAGS.FINISH);

        // start the carving routine
        this.carvePassage(this.cells[0][0]);

        // mark the solution path
        recurseDepth = 0;
        maxRecurseDepth = 0;

        // now solve the maze and tag the path
        this.solveAndTag();

        // then add some traps...
        this.addTraps();

        // render the maze so the text rendering is set
        this.render();

        log.info(__filename, 'generate()', format('Generation Complete: Time=%dms, Recursion=%d, MazeID=%s', Date.now() - startGenTime, maxRecurseDepth, this.getId()));
        return this;
    }

    private carvePassage(cell: Cell) {
        recurseDepth++;
        log.debug(__filename, 'carvePassage()', format('Recursion: %d. Carving STARTED for cell [%d][%d].', recurseDepth, cell.getPos().row, cell.getPos().col));

        // randomly sort an array of bitwise directional values (see also: Enums.Dirs)
        let dirs = [1, 2, 4, 8].sort(function(a, b) {
            return 0.5 - Math.random();
        });

        // wander through the grid using randomized directions provided in dirs[],
        // carving out cells by adding exits as we go
        for (let n: number = 0; n < dirs.length; n++) {
            let ny: number = cell.getPos().row;
            let nx: number = cell.getPos().col;

            // move location of next cell according to random direction
            if (dirs[n] < DIRS.EAST) ny = dirs[n] == DIRS.NORTH ? ny - 1 : ny + 1;
            if (dirs[n] > DIRS.SOUTH) nx = dirs[n] == DIRS.EAST ? nx + 1 : nx - 1;

            try {
                // if the next call has valid grid coordinates, get it and carve into it
                if (ny >= 0 && ny < this.cells.length && nx >= 0 && nx < this.cells[0].length) {
                    let nextCell: Cell = this.cells[ny][nx];
                    if (!(nextCell.getTags() & TAGS.CARVED) && cell.addExit(dirs[n], this.cells)) {
                        // this is a good move, so mark the cell as carved
                        nextCell.addTag(TAGS.CARVED);

                        // and carve into the next cell
                        this.carvePassage(nextCell);
                    }
                }
            } catch {
                // somehow still grabbed an invalid cell
                log.error(__filename, 'carvePassage()', format('Error getting cell [%d][%d].', ny, nx));
            }
        }

        // update carve depth counters
        if (recurseDepth > maxRecurseDepth) {
            maxRecurseDepth = recurseDepth;
        }

        // exiting the function relieves one level of recursion
        recurseDepth--;
        log.trace(__filename, 'carvePassage()', format('Recursion: %d. Carve COMPLETED for cell [%d][%d].', recurseDepth, cell.getPos().row, cell.getPos().col));
    }

    /**
     * Returns a text rendering of the maze as a grid of 3x3
     * character blocks.
     */
    public render() {
        const H_WALL = '+---';
        const S_DOOR = '+ S ';
        const F_DOOR = '+ F ';
        const V_WALL = '|';
        const H_DOOR = '+   ';
        const V_DOOR = ' ';
        const CENTER = '   ';
        const SOLUTION = ' . ';
        const ROW_END = '+';
        const CARVED = '   ';
        const AVATAR = ' @ ';

        // TODO: Turn back on render caching after solver work is completed
        if (this.textRender.length > 0) {
            return this.textRender;
        }

        let textMaze = '';

        // walk the array, one row at a time
        for (let y = 0; y < this.height; y++) {
            for (let subRow = 0; subRow < 3; subRow++) {
                let row = '';

                // each text-cell is actually three
                for (let x = 0; x < this.width; x++) {
                    let cell = this.cells[y][x];
                    switch (subRow) {
                        case 0:
                            // only render north walls on first row
                            if (y == 0) {
                                if (!!(cell.getTags() & TAGS.START)) {
                                    row += S_DOOR;
                                } else {
                                    row += !!(cell.getExits() & DIRS.NORTH) ? H_DOOR : H_WALL;
                                }
                            }
                            break;
                        case 1:
                            // only render west walls on first column
                            if (x == 0) {
                                row += !!(cell.getExits() & DIRS.WEST) ? V_DOOR : V_WALL;
                            }

                            // render room center - check for cell properties and render appropriately
                            let cellFill = CENTER;
                            if (!!(cell.getTags() & TAGS.PATH)) cellFill = SOLUTION;
                            if (!!(cell.getTags() & TAGS.TRAP_BEARTRAP)) cellFill = '>b<';
                            if (!!(cell.getTags() & TAGS.TRAP_PIT)) cellFill = '>p<';
                            if (!!(cell.getTags() & TAGS.TRAP_FLAMETHOWER)) cellFill = '>f<';
                            row += cellFill;

                            // always render east walls (with room center)
                            row += !!(cell.getExits() & DIRS.EAST) ? V_DOOR : V_WALL;

                            break;
                        case 2:
                            // always render south walls
                            if (!!(cell.getTags() & TAGS.FINISH)) {
                                row += F_DOOR;
                            } else {
                                row += !!(cell.getExits() & DIRS.SOUTH) ? H_DOOR : H_WALL;
                            }
                            break;
                    }
                }

                if (subRow != 1) {
                    row += ROW_END;
                }

                // end the line - only draw the top subRow if on the first line
                if ((subRow == 0 && y == 0) || subRow > 0) {
                    textMaze += row + '\n';
                }
            }
        }

        this.textRender = textMaze.toString();
        return textMaze;
    }

    /**
     * Wraps the recursive tagSolution function
     * and initializes tracking variables
     */
    public solveAndTag() {
        playerPos = new Pos(this.startCell.row, this.startCell.col);
        solutionPath = new Array<string>();
        this.tagSolution(playerPos, 0);
    }

    /**
     *
     * @param cellPos
     * @param pathId
     */
    private tagSolution(cellPos: Pos, pathId: number) {
        recurseDepth++;
        let cell: Cell;

        log.trace(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Solve pass started.', recurseDepth, pathId));

        // Attempt to get the cell - if it errors we can return from this call
        try {
            cell = this.getCell(cellPos);
        } catch (err) {
            log.warn(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Invalid cell.', recurseDepth, pathId));
            recurseDepth--;
            return;
        }

        // add the cell to the list of explored cells
        solutionPath.push(cell.getPos().toString());

        // helpful vars
        let dirs = [DIRS.NORTH, DIRS.SOUTH, DIRS.EAST, DIRS.WEST];
        let moveMade = false;

        if (playerPos.equals(this.finishCell)) {
            log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- WINNING PATH!', recurseDepth, pathId));
        } else {
            // update player location, but don't move it once it finds the finish
            playerPos.col = cell.getPos().col;
            playerPos.row = cell.getPos().row;

            dirs.forEach(dir => {
                let cLoc: Pos = cell.getPos(); // current position
                let nLoc: Pos = new Pos(cLoc.row, cLoc.col); // next position

                switch (dir) {
                    case DIRS.NORTH:
                        // start always has an exit on the north wall, but it's not usable
                        if (!!(cell.getExits() & DIRS.NORTH) && !(cell.getTags() & TAGS.START)) nLoc.row -= 1;
                        break;
                    case DIRS.SOUTH:
                        if (!!(cell.getExits() & DIRS.SOUTH) && !(cell.getTags() & TAGS.FINISH)) nLoc.row += 1;
                        break;
                    case DIRS.EAST:
                        if (!!(cell.getExits() & DIRS.EAST)) nLoc.col += 1;
                        break;
                    case DIRS.WEST:
                        if (!!(cell.getExits() & DIRS.WEST)) nLoc.col -= 1;
                        break;
                }

                // ensure that a move is being made, that the cell is not visited, and that we aren't already at the finish
                if (!nLoc.equals(cLoc) && solutionPath.indexOf(nLoc.toString()) < 0) {
                    // update the path ID if moving into a new branch
                    if (moveMade) {
                        pathId++;
                        log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Moving %s [NEW PATH] to cell %s.', recurseDepth, pathId, DIRS[dir], nLoc.toString()));
                    } else {
                        log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Moving %s [CONTINUING PATH] to cell %s.', recurseDepth, pathId, DIRS[dir], nLoc.toString()));
                    }

                    if (!playerPos.equals(this.finishCell)) this.tagSolution(nLoc, pathId);

                    // mark that a move was made
                    moveMade = true;
                }
            });

            if (!moveMade) {
                log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- DEAD_END: Cannot move from cell %s', recurseDepth, pathId, cell.getPos().toString()));
            }
        }

        if (playerPos.equals(this.finishCell)) {
            log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Adding PATH tag to %s.', recurseDepth, pathId, cell.getPos().toString()));
            this.shortestPathLength++;
            cell.clearTags();
            cell.addTag(TAGS.PATH);
        }

        recurseDepth--;
        log.debug(__filename, format('tagSolution(%s)', cellPos.toString()), format('R:%d P:%s -- Path complete.', recurseDepth, pathId));
    } // end tagSolution()

    private addTraps() {
        log.debug(__filename, 'generate()', format('Randomly adding traps for challenge level %s maze.', this.challenge));

        let trapCount = 0;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let cell = this.cells[y][x];

                // add traps?  Have to be sure that the trap can be jumped over
                if (this.challenge >= 3) {
                    // traps only allowed if there are open cells on either side to allow jumping
                    // traps on the solution path will be removed when solution is

                    let trapAllowed = !!(cell.getExits() & DIRS.NORTH) && !!(cell.getExits() & DIRS.SOUTH); // north-south safe
                    if (!trapAllowed) trapAllowed = !!(cell.getExits() & DIRS.EAST) && !!(cell.getExits() & DIRS.WEST); // not north-south save, but east-west safe?
                    if (trapAllowed) trapAllowed = !(cell.getTags() & TAGS.PATH); // cancel both if trap is on solution path

                    if (trapAllowed) {
                        let trapTries = Math.floor(this.challenge / 4);
                        log.debug(__filename, 'generate()', format('trapTries=', trapTries));

                        for (let trapCheck = 1; trapCheck <= Math.floor(this.challenge / 3); trapCheck++) {
                            let trapNum = Math.floor(Math.random() * 13) - this.challenge + 1;
                            log.debug(__filename, 'generate()', format('trapNum=%s', trapNum));
                            switch (trapNum) {
                                case 1: {
                                    cell.addTag(TAGS.TRAP_PIT);
                                    trapCount++;
                                    break;
                                }
                                case 2: {
                                    cell.addTag(TAGS.TRAP_FLAMETHOWER);
                                    trapCount++;
                                    break;
                                }
                                default: {
                                    log.debug(__filename, 'generate()', format('No hit on trap num %s', trapNum));
                                }
                            }
                            if (trapNum > 0 && trapNum < 4) break;
                        }
                    } else {
                        log.debug(__filename, 'generate()', format('No room for traps.'));
                    }
                } else {
                    log.debug(__filename, 'generate()', format('Challenge %s too low for traps.', this.challenge));
                }
            }
        }
        log.debug(__filename, 'generate()', format('Total trap count=%s', trapCount));
    }
}
