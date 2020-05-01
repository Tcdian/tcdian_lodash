import once from '../source/once';

test('once 函数测试', () => {
    const mockFn = jest.fn().mockReturnValueOnce('first call').mockReturnValueOnce('second call');
    const calledFunc = once(mockFn);
    // first call
    const first = calledFunc();
    expect(mockFn).toBeCalledTimes(1);
    expect(first).toBe('first call');
    // second call, mockFn 只会被调用一次
    const second = calledFunc();
    expect(mockFn).toBeCalledTimes(1);
    expect(second).toBe('first call');
});