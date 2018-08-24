
export const filter = (
    ingredients: Array<{name: string}>,
    ...filters: Array<(items: Array<{name: string}>)=>Array<{name: string}>>
) => {
    let filteredIngredients = [...ingredients];

    filters.forEach(filter => {
        filteredIngredients = filter(filteredIngredients);
    });
    return filteredIngredients;
};
