import { before } from '../source/function/before';

describe('before', () => {
    test('before 3 times', () => {
        const mockFn = jest
            .fn()
            .mockReturnValueOnce('first call')
            .mockReturnValueOnce('second call')
            .mockReturnValueOnce('third call');
        const callBefore3Times = before(3, mockFn);
        // first call
        const first = callBefore3Times();
        expect(mockFn).toBeCalledTimes(1);
        expect(first).toBe('first call');
        // second call
        const second = callBefore3Times();
        expect(mockFn).toBeCalledTimes(2);
        expect(second).toBe('second call');
        // third call, mockFn 只调用了两次, 返回第二次调用的结果
        const third = callBefore3Times();
        expect(mockFn).toBeCalledTimes(2);
        expect(third).toBe('second call');
    });
});
