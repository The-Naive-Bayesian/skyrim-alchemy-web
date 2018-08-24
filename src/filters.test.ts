import {nameContains} from "./filters";

test('filter returned by nameContains filters on strict substrings', () => {
    const items = [{name: 'abc'}, {name: 'def'}];
    const filter = nameContains('ab');

    expect(items.filter(filter)).toEqual([{name: 'abc'}]);
});

test('filter returned by nameContains filters on full string match', () => {
    const items = [{name: 'abc'}, {name: 'def'}];
    const filter = nameContains('abc');

    expect(items.filter(filter)).toEqual([{name: 'abc'}]);
});
