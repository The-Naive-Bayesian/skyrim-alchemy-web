import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";
import {IngredientItem} from "./IngredientItem";
import './IngredientList.css';

interface IngredientListProps {
    ingredients: Ingredient[];
    onSelect: (ingredient: Ingredient)=>void;
    selectedEffects: string[];
}

export const IngredientList = ({ingredients, onSelect, selectedEffects}: IngredientListProps) => (
    <ul className={'ingredient-list'}>
        {ingredients.map(
            ingredient => (
                <IngredientItem
                    ingredient={ingredient}
                    key={ingredient.name}
                    onSelect={onSelect}
                    selectedEffects={selectedEffects}
                />
            )
        )}
    </ul>
);
