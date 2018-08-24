import { filter } from './filter';

test('no filters returns all ingredients', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}];

    expect(filter(ingredients).length).toBe(ingredients.length);
});

test('works with a single filter', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

    const aFilter = (ingredients: Array<{name: string}>): Array<{name: string}> => (
        ingredients.filter(({name}) => name === 'a')
    );

    expect(filter(ingredients, aFilter))
        .toEqual([{name: 'a'}]);
});

test('works with multiple filters', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

    const not_aFilter = (ingredients: Array<{name: string}>): Array<{name: string}> => (
        ingredients.filter(({name}) => name !== 'a')
    );

    const not_bFilter = (ingredients: Array<{name: string}>): Array<{name: string}> => (
        ingredients.filter(({name}) => name !== 'b')
    );

    expect(filter(ingredients, not_aFilter, not_bFilter))
        .toEqual([{name: 'c'}]);
});
