"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
const Logger_1 = require("./Logger");
let log = Logger_1.Logger.getInstance();
let enums = Enums_1.Enums.getInstance();
let exits = Enums_1.DIRS.NORTH + Enums_1.DIRS.SOUTH + Enums_1.DIRS.EAST;
console.log(enums.listSelectedBitNames(Enums_1.DIRS, exits));
log.info(__filename, 'test()', 'This is a test.');
