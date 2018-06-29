
// Cardinal directions used for movement, exits, and other direction-based functions
export enum DIRS {
        NORTH = 1,
        SOUTH = 2,
        EAST = 4,
        WEST = 8
}


// Tags for cells, avatar, item, and other functions 
export enum TAGS { 
    START = 1,
    FINISH = 2, 
    PATH = 4,
    CARVED = 8
}

// enumeration of possible game results
export enum GAME_RESULTS {
    IN_PROGRESS,
    OUT_OF_MOVES,
    OUT_OF_TIME,
    DEATH_TRAP,
    DEATH_POISON,
    WIN
}

// enumeration of possible game states
export enum GAME_STATES {
    NEW,
    IN_PROGRESS,
    WAIT_BOT,
    WAIT_TEAM,
    FINISHED
}

/**
 * Singleton of Enumerations used by CC2018
 */
export class Enums {
    private static instance: Enums;

    // Private constructor to enforce singleton pattern
    private constructor() { }

    /**
     * Singleton pattern
     */
    static getInstance() {
        if (!Enums.instance) {
            Enums.instance = new Enums();
        }

        return Enums.instance;
    }

    /**
     * Returns comma-delimited string of the selected (bitwise) values within 
     * the given enumeration.  
     * 
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    public listSelectedBitNames(targetEnum: Object, selectedBits: number): string {
        let ret: string = '';

        for (const dir in targetEnum) {
            if (Number(dir)) {
                let bitVal: number = parseInt(dir);
                if (!!(bitVal & selectedBits)) {
                    let stringVal: string = (<any>targetEnum)[bitVal];
                    ret += (ret.length == 0 ? stringVal : ', ' + stringVal);
                }
            }
        }

        if (ret.length == 0) ret = 'NONE';
        return ret;
    }

    /**
     * Returns string array of the selected (bitwise) values within 
     * the given enumeration.  
     * 
     * @param targetEnum - Only works with bitwise enumerations!
     * @param selectedBits - Number representing the selected bits
     */
    public getSelectedBitNames(targetEnum: Object, selectedBits: number): Array<string> {
        let ret: Array<string> = new Array<string>();

        for (const dir in targetEnum) {
            if (Number(dir)) {
                let bitVal: number = parseInt(dir);
                if (!!(bitVal & selectedBits)) {
                    let stringVal: string = (<any>targetEnum)[bitVal];
                    ret.push(stringVal);
                }
            }
        }

        if (ret.length == 0) ret.push('NONE');
        return ret;
    }
}