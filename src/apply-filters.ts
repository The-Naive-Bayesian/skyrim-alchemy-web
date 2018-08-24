import {Ingredient} from "./models/Ingredient.model";

export const applyFilters = (
    ingredients: Ingredient[],
    ...filters: Array<(item: Ingredient) => boolean>
) => {
    let filteredIngredients = [...ingredients];

    filters.forEach(filter => {
        filteredIngredients = filteredIngredients.filter(filter);
    });
    return filteredIngredients;
};
