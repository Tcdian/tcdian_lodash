import _ from 'lodash';
import { dropRight } from '../source/array';

test(`dropRight([1, 2, 3]) => ${dropRight([1, 2, 3])}`, () => {
    expect(dropRight([1, 2, 3])).toEqual(_.dropRight([1, 2, 3]));
});

test(`dropRight([1, 2, 3], 2) => ${dropRight([1, 2, 3], 2)}`, () => {
    expect(dropRight([1, 2, 3], 2)).toEqual(_.dropRight([1, 2, 3], 2));
});

test(`dropRight([1, 2, 3], 5) => ${dropRight([1, 2, 3], 5)}`, () => {
    expect(dropRight([1, 2, 3], 5)).toEqual(_.dropRight([1, 2, 3], 5));
});

test(`dropRight([1, 2, 3], 0) => ${dropRight([1, 2, 3], 0)}`, () => {
    expect(dropRight([1, 2, 3], 0)).toEqual(_.dropRight([1, 2, 3], 0));
});
