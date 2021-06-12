import { identity } from '../util/identity';
import { iteratee } from '../util/iteratee';

type PropertyName = string | number | symbol;
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | Partial<T>;
type ValueIterator<T, R> = (value: T) => R;
type ValueIterateeCustom<T, R> = ValueIterator<T, R> | IterateeShorthand<T>;

function sortedUniqBy<T>(array: T[], predicate: ValueIterateeCustom<T, unknown> = identity): T[] {
    const iterateeFunc = iteratee(predicate);
    return array.filter(
        (value, index, collection) =>
            index === 0 || !Object.is(iterateeFunc(value), iterateeFunc(collection[index - 1]))
    );
}

export { sortedUniqBy };
