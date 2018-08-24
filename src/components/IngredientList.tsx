import * as React from 'react';

export const IngredientList = (props : {ingredients: Array<{name: string}>}) => (
    <React.Fragment>
        {props.ingredients.map(ingredient => <h2>{ingredient.name}</h2>)}
    </React.Fragment>
);
