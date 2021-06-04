import { flatten } from './flatten';

function difference<T>(array: T[], ...values: T[][]): T[] {
    const exitSet = new Set(flatten(values));
    return array.filter((arrVal) => !exitSet.has(arrVal));
}

export { difference };
