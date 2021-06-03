import { assignIn } from '../source/object/assignIn';
import { create } from '../source/object/create';

describe('assignIn', () => {
    const source1 = create({ b: 2 }, { a: 1 });
    const source2 = create({ d: 4 }, { c: 3 });

    test('assignIn({ a: 0 }, source1) => { a: 1, b: 2 }', () => {
        expect(assignIn({ a: 0 }, source1)).toEqual({ a: 1, b: 2 });
    });

    test('assignIn({ a: 0 }, source2) => { a: 0, c: 3, d: 4 }', () => {
        expect(assignIn({ a: 0 }, source2)).toEqual({ a: 0, c: 3, d: 4 });
    });

    test('assignIn({ a: 0 }, source1, source2) => { a: 1, b: 2, c: 3, d: 4 }', () => {
        expect(assignIn({ a: 0 }, source1, source2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});
