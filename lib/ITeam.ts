/**
 * Team is an individual code-camp team that includes a collection of Bots
 */

import { IBot } from './IBot';
import { ITrophy } from './ITrophy';

export interface ITeam {
    name: string;
    id: string;
    logo: string;
    trophies: Array<ITrophy>;
    bots: Array<IBot>;
}
