describe('Given concat method', () => {
    describe('When it is called', () => {
        it.each`
            act | assert
            ${[].concat(['first', 'second']).concat(['last'])} | ${['first', 'second', 'last']}
            ${[].concat([1, 2]).concat([3])} | ${[1, 2, 3]}
            ${[].concat(['one', 'two']).concat(['three'])} | ${['one', 'two', 'three']}
            ${[].concat([2, 3]).concat([5])} | ${[2, 3, 5]}
            ${[].concat([1, 1]).concat([2])} | ${[1, 1, 2]}
        `('Then input is $act))', ({ act, assert }) => {
            expect(act).toEqual(assert);
        });
    });
});
