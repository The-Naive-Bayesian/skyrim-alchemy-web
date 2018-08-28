import * as React from "react";
import {Ingredient} from "../models/Ingredient.model";

interface SelectedIngredientItemProps {
    ingredient: Ingredient;
    onDeselect: (ingredientName: string) => void;
}

export const SelectedIngredientItem = ({ingredient, onDeselect}: SelectedIngredientItemProps) => (
    <p style={{margin: '0.25em auto'}} onClick={() => onDeselect(ingredient.name)}>
        {ingredient.name}
    </p>
);
