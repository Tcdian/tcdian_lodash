import { identity } from '../util/identity';
import { iteratee } from '../util/iteratee';
import { isArray } from '../lang/isArray';
import { isString } from '../lang/isString';
import { entries } from '../object/entries';

type PropertyName = string | number | symbol;
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | Partial<T>;
type ArrayIterator<T, R> = (value: T, index: number, collection: T[]) => R;
type ArrayIterateeCustom<T, R> = ArrayIterator<T, R> | IterateeShorthand<T>;
type StringIterator<R> = (char: string, index: number, string: string) => R;
type StringIterateeCustom<R> = StringIterator<R> | IterateeShorthand<string>;
type RecordIterator<K extends PropertyName, V, R> = (value: V, key: K, collection: Record<K, V>) => R;
type RecordIterateeCustom<K extends PropertyName, V, R> = RecordIterator<K, V, R> | IterateeShorthand<V>;

function findLast<T>(collection: T[], predicate?: ArrayIterateeCustom<T, boolean>, fromIndex?: number): T;
function findLast(collection: string, predicate?: StringIterateeCustom<boolean>, fromIndex?: number): string;
function findLast<K extends PropertyName, V>(
    collection: Record<K, V>,
    predicate?: RecordIterateeCustom<K, V, boolean>,
    fromIndex?: number
): V;
function findLast(collection: any, predicate: any = identity, fromIndex?: number): any {
    const iterativeFunc = iteratee(predicate);
    const pairs = entries(collection);
    const len = pairs.length;
    if (fromIndex === undefined) {
        fromIndex = len - 1;
    } else {
        if (fromIndex < 0) {
            fromIndex = Math.max(fromIndex + len, 0);
        } else {
            fromIndex = Math.min(fromIndex, len - 1);
        }
    }
    for (let i = fromIndex; i > 0; i--) {
        let [key, value]: [PropertyName, any] = pairs[i];
        if (isArray(collection) || isString(collection)) {
            key = Number(key);
        }
        if (iterativeFunc(value, key, collection)) {
            return value;
        }
    }
}

export { findLast };
