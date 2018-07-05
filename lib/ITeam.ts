/**
 * Team is an individual code-camp team that includes a collection of Bots
 */

import { IBot } from './IBot';

export interface ITeam {
    name: string;
    id: string;
    bots: Array<IBot>;
}
