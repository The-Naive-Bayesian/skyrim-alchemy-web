import * as React from 'react';
import {applyFilters} from "../apply-filters";
import ingredients from "../data/ingredients";
import {nameContains} from "../filters";
import {Ingredient} from "../models/Ingredient.model";

// Define prop types
interface IProps {
    filterString: string;
    render: (ingredients: Ingredient[]) => any;
}

export const IngredientProvider = ({filterString, render}: IProps) => {
    const ingredientsToRender = applyFilters(ingredients, nameContains(filterString));
    return (
        <>
            {render(ingredientsToRender)}
        </>
    );
};