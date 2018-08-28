import * as React from 'react';
import {applyFilters} from "../apply-filters";
import ingredients from "../data/ingredients";
import {nameContains, nameDoesNotContain} from "../filters";
import {Ingredient} from "../models/Ingredient.model";

// Define prop types
interface IProps {
    filterString: string;
    selectedIngredients: Ingredient[];
    render: (ingredients: Ingredient[]) => any;
}

export const IngredientProvider = ({filterString, selectedIngredients, render}: IProps) => {
    const nameFilter = nameContains(filterString);
    const ingredientNameFilters = selectedIngredients.map(ingredient => nameDoesNotContain(ingredient.name));
    const ingredientsToRender = applyFilters(ingredients, nameFilter, ...ingredientNameFilters);
    return (
        <>
            {render(ingredientsToRender)}
        </>
    );
};