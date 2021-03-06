import _ from 'lodash';
import { merge } from '../source/object/merge';

describe('merge', () => {
    interface Recursive {
        a?: Recursive;
        id: string;
    }

    const object = { a: [{ b: 2 }, { d: 4 }] };
    const other = { a: [{ c: 3 }, { e: 5 }] };

    test('merge objects', () => {
        expect(merge(object, other)).toEqual({
            a: [
                { b: 2, c: 3 },
                { d: 4, e: 5 },
            ],
        });
    });

    test('merge recursive', () => {
        const recursiveA: Recursive = { id: 'a' };
        recursiveA.a = recursiveA;
        const recursiveB: Recursive = { id: 'b' };
        recursiveB.a = recursiveB;
        // 参照物
        const recursiveAR: Recursive = { id: 'a' };
        recursiveAR.a = recursiveAR;
        const recursiveBR: Recursive = { id: 'b' };
        recursiveBR.a = recursiveBR;
        expect(merge(recursiveA, recursiveB)).toEqual(_.merge(recursiveAR, recursiveBR));
    });
});
