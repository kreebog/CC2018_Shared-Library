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
Enumerations module for Code Camp 2018
### Game.ts
Enumerations module for Code Camp 2018
### Score.ts
Enumerations module for Code Camp 2018
### Team.ts
Enumerations module for Code Camp 2018
### Logger.ts
Enumerations module for Code Camp 2018

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
