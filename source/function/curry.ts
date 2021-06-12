import { _executeBound } from '../util/_executeBound';
import { _replaceHolders } from '../util/_replaceHolders';

type Func = (...args: any[]) => any;
interface Curry {
    <A, R>(func: (arg: A) => R, arity?: number): CurriedFunction1<A, R>;
    <A1, A2, R>(func: (arg1: A1, arg2: A2) => R, arity?: number): CurriedFunction2<A1, A2, R>;
    (func: Func, arity?: number): Func;
    placeholder: '_';
}
interface CurriedFunction1<A, R> {
    (): CurriedFunction1<A, R>;
    (arg: A): R;
}
interface CurriedFunction2<A1, A2, R> {
    (): CurriedFunction2<A1, A2, R>;
    (arg1: A1): CurriedFunction1<A2, R>;
    (arg1: '_', arg2: A2): CurriedFunction1<A1, R>;
    (args1: A1, arg2: A2): R;
}

const curry: Curry = function (func: Func, arity = func.length): Func {
    const placeholder = curry.placeholder;
    return _curry(func, arity, [], placeholder);
};

function _curry(func: Func, arity: number, partials: any[], placeholder: '_'): Func {
    return function curried(this: any, ...args: any[]) {
        const argsLen = args.filter((arg) => arg !== placeholder).length;
        const finalArgs = _replaceHolders(partials, args, placeholder);
        if (argsLen >= arity) {
            return _executeBound(func, curried, this, this, finalArgs);
        } else {
            return _curry(func, arity - argsLen, finalArgs, placeholder);
        }
    };
}

curry.placeholder = '_';

export { curry };
