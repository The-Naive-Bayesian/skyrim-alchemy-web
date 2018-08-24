
export const applyFilters = (
    ingredients: Array<{name: string}>,
    ...filters: Array<(item: {name: string}) => boolean>
) => {
    let filteredIngredients = [...ingredients];

    filters.forEach(filter => {
        filteredIngredients = filteredIngredients.filter(filter);
    });
    return filteredIngredients;
};
