import * as React from 'react';
import './IngredientList.css';

export const IngredientList = (props : {ingredients: Array<{name: string}>}) => (
    <ul className={'ingredient-list'}>
        {props.ingredients.map(ingredient => (
            <li className={''} key={ingredient.name}>
                <h2>{ingredient.name}</h2>
            </li>
        ))}
    </ul>
);
