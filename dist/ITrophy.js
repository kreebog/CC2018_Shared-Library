"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
exports.Trophies = new Array({
    id: Enums_1.TROPHY_IDS.WASTED_TIME,
    name: 'Wasted Time',
    description: "You weren't in too much of a hurry to stop and dance, or smell the flowers, or practice your moonwalk...",
    bonusAward: 0,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.NERVOUS_WALK,
    name: 'A Nervous Walk',
    description: 'You kept looking back over your shoulder - worried about the lava?',
    bonusAward: 0,
    count: 1
}, { id: Enums_1.TROPHY_IDS.WATCHING_PAINT_DRY, name: 'Watching Paint Dry', description: 'Why did you stare at the wall? Why? WHY?!', bonusAward: 0, count: 1 }, {
    id: Enums_1.TROPHY_IDS.WISHFUL_THINKING,
    name: 'Wishful Thinking',
    description: "You thought about trying to walk out through the entrance, didn't you?",
    bonusAward: 0,
    count: 1
}, {
    id: Enums_1.TROPHY_IDS.WISHFUL_DYING,
    name: 'Wishful Dying',
    description: 'You actually tried to walk back out through the entrance! We told you there was LAVA!',
    bonusAward: -500,
    count: 1
}, { id: Enums_1.TROPHY_IDS.WINNER_WINNER_CHEDDAR_DINNER, name: 'Winner, Winner, Cheddar Dinner', description: 'You escaped the maze!', bonusAward: 500, count: 1 }, {
    id: Enums_1.TROPHY_IDS.PERFECT_RUN,
    name: 'Perfect Run',
    description: 'You beat a maze in the shortest possible number of moves. NICE!',
    bonusAward: 1000,
    count: 1
}, { id: Enums_1.TROPHY_IDS.YOU_FOUGHT_THE_WALL, name: 'You Fought the Wall', description: 'You fought the wall and the wall won.', bonusAward: -50, count: 1 }, {
    id: Enums_1.TROPHY_IDS.SPINNING_YOUR_WHEELS,
    name: 'Spinning Your Wheels',
    description: 'You tried to walk without bothering to stand up first.',
    bonusAward: -10,
    count: 1
});
