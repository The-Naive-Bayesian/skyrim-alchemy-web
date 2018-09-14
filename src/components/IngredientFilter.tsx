import * as React from 'react';
import {applyFilters} from "../apply-filters";
import ingredients from "../data/ingredients";
import {effectOrNameContains, nameDoesNotContain, sharesEffect} from "../filters";
import {Ingredient} from "../models/Ingredient.model";

// Define prop types
interface IProps {
    filterString: string;
    filterEffects: string[];
    selectedIngredients: Ingredient[];
    render: (ingredients: Ingredient[]) => any;
}

export const IngredientProvider = ({filterString, filterEffects, selectedIngredients, render}: IProps) => {
    const nameFilter = effectOrNameContains(filterString);
    const ingredientNameFilters = selectedIngredients.map(ingredient => nameDoesNotContain(ingredient.name));
    const additionalFilters: any = [];
    filterEffects.forEach(effectName => {
        additionalFilters.push(effectOrNameContains(effectName));
    });
    if (selectedIngredients.length > 0) {
        additionalFilters.push(sharesEffect(selectedIngredients));
    }

    const ingredientsToRender = applyFilters(
        ingredients,
        nameFilter,
        ...ingredientNameFilters,
        ...additionalFilters
    );
    return (
        <>
            {render(ingredientsToRender)}
        </>
    );
};
