import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";
import {IngredientItem} from "./IngredientItem";
import './IngredientList.css';

export const IngredientList = (props : {ingredients: Ingredient[]}) => (
    <ul className={'ingredient-list'}>
        {props.ingredients.map(
            ingredient => <IngredientItem ingredient={ingredient} key={ingredient.name}/>
        )}
    </ul>
);
