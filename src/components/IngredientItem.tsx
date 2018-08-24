import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";

export const IngredientItem = ({ingredient}: {ingredient: Ingredient}) => (
    <li className={'ingredient-item'}>
        <h2>{ingredient.name}</h2>
    </li>
);
