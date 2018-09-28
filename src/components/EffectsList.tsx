import * as React from "react";
import {Ingredient} from "../models/Ingredient.model";
import './EffectsList.css';

interface IEffectsListProps {
    ingredients: Ingredient[];
    toggleEffectSelection: (effectName: string) => void;
    filteredEffects: string[];
}

export const EffectsList = ({ingredients, toggleEffectSelection, filteredEffects}: IEffectsListProps) => {
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
                    className={
                        `effect ${effects[effect] ? 'active' : ''}
                        ${filteredEffects.some(e => e.toLowerCase() === effect.toLowerCase()) ? 'filter' : ''}`
                    }
                    key={effect}
                    style={{fontSize: '0.6em'}}
                    onClick={() => toggleEffectSelection(effect)}
                >
                    {effect}
                </p>
        ))}
        </section>
)};
