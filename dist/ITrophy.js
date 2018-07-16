"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
exports.Trophies = new Array({
    id: Enums_1.TROPHY_IDS.WASTED_TIME,
    name: 'Wasted Time',
    description: "You weren't in too much of a hurry to stop and dance, or smell the flowers, or practice your moonwalk...",
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.NERVOUS_WALK,
    name: 'A Nervous Walk',
    description: 'You kept looking back over your shoulder - worried about the lava?',
    bonusAward: -5,
    count: 1
}, { id: Enums_1.TROPHY_IDS.WATCHING_PAINT_DRY, name: 'Watching Paint Dry', description: 'Why did you stare at the wall? Why? WHY?!', bonusAward: 0, count: 1 }, {
    id: Enums_1.TROPHY_IDS.WISHFUL_THINKING,
    name: 'Wishful Thinking',
    description: "Even though we told you abou the lava you thought about trying to walk out through the entrance, didn't you? ",
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.WISHFUL_DYING,
    name: 'Wishful Dying',
    description: 'You actually died by walking back through the entrance! We told you there was LAVA!',
    bonusAward: -500,
    count: 1
}, { id: Enums_1.TROPHY_IDS.WINNER_WINNER_CHEDDAR_DINNER, name: 'Winner, Winner, Cheddar Dinner', description: 'You escaped the maze!', bonusAward: 500, count: 1 }, {
    id: Enums_1.TROPHY_IDS.FLAWLESS_VICTORY,
    name: 'Flawless Victory',
    description: 'You defeated the maze in the shortest possible number of moves. NICE!',
    bonusAward: 1000,
    count: 1
}, { id: Enums_1.TROPHY_IDS.YOU_FOUGHT_THE_WALL, name: 'You Fought the Wall', description: 'You fought the wall and the wall won.', bonusAward: -50, count: 1 }, {
    id: Enums_1.TROPHY_IDS.SPINNING_YOUR_WHEELS,
    name: 'Spinning Your Wheels',
    description: 'You tried to walk without bothering to stand up first.',
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.SCRIBBLER,
    name: 'The Scribbler',
    description: 'You took the time to scratch a note into the floor.',
    bonusAward: 5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.PAPERBACK_WRITER,
    name: 'Paperback Writer',
    description: 'You wrote more than one note in a room... Are you trying to be a novelist?',
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.JUMPING_JACK_FLASH,
    name: 'Jumping Jack Flash',
    description: 'Rather than solve the maze, you jumped. In place. For no reason at all.',
    bonusAward: -10,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.KICKING_UP_DUST,
    name: 'Kicking Up Dust',
    description: 'You tried to jump without bothering to stand up first and ended up just mule-kicking the dusty air.',
    bonusAward: -10,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.MIGHTY_MOUSE,
    name: 'Might Mouse',
    description: 'You saw a trap ahead and JUMPED, flying over the danger like the Mighty Mouse of legend.',
    bonusAward: 50,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.SHORTCUTTER,
    name: 'Shortcutter',
    description: 'You found a path through the maze that let you leave more than half of it unexplored!',
    bonusAward: 125,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.THE_LONG_WAY_HOME,
    name: 'The Long Way Home',
    description: 'Your path through the maze included more than 75% of the rooms.',
    bonusAward: -10,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.THE_LONGER_WAY_HOME,
    name: 'The Longer Way Home',
    description: 'Your path through the maze included more than 90% of the rooms.',
    bonusAward: -25,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.THE_LONGEST_WAY_HOME,
    name: 'The Longest Way Home',
    description: 'You actually visited every single cell in the maze. Were preparing for retirement by practicing your Sunday driving?',
    bonusAward: -50,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.LIGHT_AT_THE_END,
    name: 'A Light at the End',
    description: 'You saw the light... of the exit! And there was no lava.',
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.DAZED_AND_CONFUSED,
    name: 'Dazed and Confused',
    description: 'You did something unwise and spent a turn stunned as a reward.',
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.DOUBLE_BACKER,
    name: 'Double Backer',
    description: 'You visited the same rooms over, and over, and over again...',
    bonusAward: -5,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.LOOPER,
    name: 'Looper',
    description: 'You found a path that you really liked and kept repeating it.',
    bonusAward: -50,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.YOU_FELL_FOR_IT,
    name: 'You FELL for It',
    description: 'You found a pit trap... The hard way.',
    bonusAward: -75,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.TOO_HOT_TO_HANDLE,
    name: 'Too Hot to Handle',
    description: "You found, and detonated, a fire trap.  Didn't anybody every tell you not to play with fire?",
    bonusAward: -75,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.OUT_OF_MOVES,
    name: 'Out of Moves',
    description: 'We gave you enough moves to visit every room of the maze... THREE TIMES... But you still used them all without finding the exit.',
    bonusAward: -125,
    count: 1
});
