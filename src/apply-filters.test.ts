import { applyFilters } from './apply-filters';

test('no filters returns all ingredients', () => {
    const ingredients = [{effects: [], name: 'a'}, {effects: [], name: 'b'}];

    expect(applyFilters(ingredients).length).toBe(ingredients.length);
});

test('works with a single filter', () => {
    const ingredients = [{effects: [], name: 'a'}, {effects: [], name: 'b'}, {effects: [], name: 'c'}];

    const aFilter = ({name}: {name: string}) => (name === 'a');

    expect(applyFilters(ingredients, aFilter))
        .toEqual([{effects: [], name: 'a'}]);
});

test('works with multiple filters', () => {
    const ingredients = [{effects: [], name: 'a'}, {effects: [], name: 'b'}, {effects: [], name: 'c'}];

    const not_aFilter = ({name}: {name: string}) => (name !== 'a');
    const not_bFilter = ({name}: {name: string}) => (name !== 'b');

    expect(applyFilters(ingredients, not_aFilter, not_bFilter))
        .toEqual([{effects: [], name: 'c'}]);
});
