import {nameContains, nameDoesNotContain} from "./filters";

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
