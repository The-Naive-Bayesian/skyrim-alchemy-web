import {effectNamesContain, nameContains, nameDoesNotContain, sharesEffect} from "./filters";

describe('nameContains', () => {
    test('filter returned filters on strict substrings', () => {
        const items = [{name: 'abc'}, {name: 'def'}];
        const filter = nameContains('ab');

        expect(items.filter(filter)).toEqual([{name: 'abc'}]);
    });

    test('filter returned filters on full string match', () => {
        const items = [{name: 'abc'}, {name: 'def'}];
        const filter = nameContains('abc');

        expect(items.filter(filter)).toEqual([{name: 'abc'}]);
    });

    test('filter returned is not case sensitive', () => {
        const items = [{name: 'aBC'}, {name: 'def'}];
        const filter = nameContains('ab');

        expect(items.filter(filter)).toEqual([{name: 'aBC'}]);
    });
});

describe('nameDoesNotContain', () => {
    test('filter returned filters on strict substrings', () => {
        const items = [{name: 'abc'}, {name: 'def'}];
        const filter = nameDoesNotContain('ab');

        expect(items.filter(filter)).toEqual([{name: 'def'}]);
    });

    test('filter returned filters on full string match', () => {
        const items = [{name: 'abc'}, {name: 'def'}];
        const filter = nameDoesNotContain('abc');

        expect(items.filter(filter)).toEqual([{name: 'def'}]);
    });

    test('filter returned is not case sensitive', () => {
        const items = [{name: 'aBC'}, {name: 'def'}];
        const filter = nameDoesNotContain('ab');

        expect(items.filter(filter)).toEqual([{name: 'def'}]);
    });
});

describe('sharesEffect', () => {
    test('filter returned filters on single effect match', () => {
        const items = [
            {name: 'abc', effects: ['a','b']},
            {name: 'def', effects: ['c','d']},
        ];
        const inputs = [
            {name: 'a', effects: ['e', 'a']}
        ];
        const filter = sharesEffect(inputs);

        expect(items.filter(filter)).toEqual([{name: 'abc', effects: ['a','b']}]);
    });

    test('filter returned filters on effect match in second ingredient input', () => {
        const items = [
            {name: 'abc', effects: ['a','b']},
            {name: 'def', effects: ['c','d']},
        ];
        const inputs = [
            {name: 'a', effects: ['e', 'f']},
            {name: 'b', effects: ['a', 'e']},
        ];
        const filter = sharesEffect(inputs);

        expect(items.filter(filter)).toEqual([{name: 'abc', effects: ['a','b']}]);
    });

    test('filter returned filters on full effect match', () => {
        const items = [
            {name: 'abc', effects: ['a','b']},
            {name: 'def', effects: ['c','d']},
        ];
        const inputs = [
            {name: 'a', effects: ['a', 'b']},
        ];
        const filter = sharesEffect(inputs);

        expect(items.filter(filter)).toEqual([{name: 'abc', effects: ['a','b']}]);
    });
});

describe('effectNamesContain', () => {
    test('filter returned filters on strict substrings', () => {
        const items = [{effects: ['abc']}, {effects: ['def']}];
        const filter = effectNamesContain('ab');

        expect(items.filter(filter)).toEqual([{effects: ['abc']}]);
    });

    test('filter returned filters on full string match', () => {
        const items = [{effects: ['abc']}, {effects: ['def']}];
        const filter = effectNamesContain('abc');

        expect(items.filter(filter)).toEqual([{effects: ['abc']}]);
    });

    test('filter returned filters on second effect', () => {
        const items = [{effects: ['abc', 'ghi']}, {effects: ['def']}];
        const filter = effectNamesContain('ghi');

        expect(items.filter(filter)).toEqual([{effects: ['abc', 'ghi']}]);
    });

    test('filter returned is not case sensitive', () => {
        const items = [{effects: ['aBC']}, {effects: ['def']}];
        const filter = effectNamesContain('ab');

        expect(items.filter(filter)).toEqual([{effects: ['aBC']}]);
    });
});

