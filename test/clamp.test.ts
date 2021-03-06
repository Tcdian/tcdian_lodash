import { clamp } from '../source/number/clamp';

describe('clamp', () => {
    test('clamp(-10, -5, 5) => -5', () => {
        expect(clamp(-10, -5, 5)).toBe(-5);
    });

    test('clamp(10, -5, 5) => 5', () => {
        expect(clamp(10, -5, 5)).toBe(5);
    });

    test('clamp(0, -5, 5) => 0', () => {
        expect(clamp(0, -5, 5)).toBe(0);
    });
});
