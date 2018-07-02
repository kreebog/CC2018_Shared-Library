# cc2018-shared-library
TypeScript Class / Module library for Code Camp 2018.

## Samples
* For JavaScript examples, see: <project-root>/js-example.js
* For TypeScript examples, see: <project-root>/src/ts-example.ts

### Maze.ts
Maze Class - The basic maze class with generation and text-rendering functions.
### Cell.ts
Cell Class - The maze itself is a two dimensional array of Cells
### Enums.ts
Enums Module - Enumerations and helpful functions related to them
### Game.ts
Game Class - Manages ongoing game sessions
### Score.ts
Score Class - Tracks scores and action/result history
### Team.ts
Team Class - Basic team info and a collection of the team's individual AI 
### Logger.ts
Logger Module - Simple console logging wrapper to provide consistent, controllable console logging

Usage:

```typescript
import { Bot, Cell, Enums, Game, Logger, Maze, Score, Team, ICell, IMaze, IMazeStub, IScore, ITeam } from 'cc2018-ts-lib'; // import classes
import { LOG_LEVELS } from 'cc2018-ts-lib/dist/Logger';

// Using the logger
let log = Logger.getInstance();
logger.setLogLevel(LOG_LEVELS.DEBUG);
log.info(__filename, 'Example()', 'This is an example of how to use cc2018-ts-lib.');

// Using the maze class
let myMaze = new Maze();
myMaze.generate(10, 15, 'SuperSimple');
console.log(myMaze.render());

// getting a specific cell
let myCell = myMaze.cells[0][0];
let exits = myCell.getExits();

// using Enums and Enum helper functions 
console.log(Enums.listSelectedBitNames(Enums.DIRS, exits));

```