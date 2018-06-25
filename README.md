# cc2018-shared-library
TypeScript Class / Module library for Code Camp 2018.

## Samples
* For JavaScript examples, see: <project-root>/js-example.js
* For TypeScript examples, see: <project-root>/src/ts-example.ts

### Maze.ts
Maze Class - The basic maze class with generation and text-rendering functions.

Usage:

```typescript
import { Maze } from './Maze';

let myMaze = new Maze();
myMaze.generate(10, 15, 'SuperSimple');
console.log(myMaze.render());
```

### Cell.ts
Cell Class - The maze itself is a two dimensional array of Cells

Usage: 

```typescript
import { Maze } from './Maze';
import { Cell } from './Cell';

let myMaze = new Maze();
myMaze.generate(10, 15, 'SuperSimple');

let myCell = myMaze.cells[0][0];

console.log(myMaze.render());
```

### Enums.ts
Enumerations module for Code Camp 2018

Usage:

```typescript
import * as Enums from './Enums';
let val: Enums.DIRECTIONS = Enums.DIRECTIONS.NORTH;

console.log(Enums.listSelectedBitNames(Enums.DIRS, val));
```
