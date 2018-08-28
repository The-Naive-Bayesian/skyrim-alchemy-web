import * as React from "react";
import {Ingredient} from "../models/Ingredient.model";
import './EffectsList.css';

export const EffectsList = ({ingredients}: {ingredients: Ingredient[]}) => {
    const effects = {};
    ingredients.forEach(ingredient => {
        ingredient.effects.forEach(effect => {
            // If this effect not already saved, save as false, else save as true
            effects[effect] = effects[effect] !== undefined;
        });
    });
    return (
        <section>
        {
            Object.keys(effects).map((effect) => (
                <p
                    className={`effect ${effects[effect] ? 'active' : ''}`}
                    key={effect}
                    style={{fontSize: '0.25em'}}
                >
                    {effect}
                </p>
        ))}
        </section>
)};
