import { isFunction } from './isFunction';
import { isLength } from './isLength';

function isArrayLike(value: any): value is { length: number } {
    return value !== null && !isFunction(value) && isLength(value.length);
}

export { isArrayLike };
