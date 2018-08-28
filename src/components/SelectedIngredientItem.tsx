import * as React from "react";
import {Ingredient} from "../models/Ingredient.model";

export const SelectedIngredientItem = ({ingredient}: {ingredient: Ingredient}) => (
    <p style={{margin: '0.25em auto'}}>
        {ingredient.name}
    </p>
);