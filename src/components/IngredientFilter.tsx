import * as React from 'react';
import {applyFilters} from "../apply-filters";
import ingredients from "../data/mock-data";
import {nameContains} from "../filters";

// Define prop types
interface IProps {
    filterString: string;
    render: (ingredients: Array<{name: string}>) => any;
}

export const IngredientProvider = ({filterString, render}: IProps) => {
    const ingredientsToRender = applyFilters(ingredients, nameContains(filterString));
    return (
        <>
            {render(ingredientsToRender)}
        </>
    );
};