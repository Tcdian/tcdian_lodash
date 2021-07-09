import { isArray } from '../lang/isArray';

function castArray<T>(value?: T | T[]): T[];
function castArray<T>(...args: T[] | T[][]): T[] {
    if (args.length === 0) {
        return [];
    }
    const value = args[0];
    return isArray(value) ? value : [value];
}

export { castArray };
