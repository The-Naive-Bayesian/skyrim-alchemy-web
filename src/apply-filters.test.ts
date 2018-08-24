import { applyFilters } from './apply-filters';

test('no filters returns all ingredients', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}];

    expect(applyFilters(ingredients).length).toBe(ingredients.length);
});

test('works with a single filter', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

    const aFilter = ({name}: {name: string}) => (name === 'a');

    expect(applyFilters(ingredients, aFilter))
        .toEqual([{name: 'a'}]);
});

test('works with multiple filters', () => {
    const ingredients = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

    const not_aFilter = ({name}: {name: string}) => (name !== 'a');
    const not_bFilter = ({name}: {name: string}) => (name !== 'b');

    expect(applyFilters(ingredients, not_aFilter, not_bFilter))
        .toEqual([{name: 'c'}]);
});
