import {Ingredient} from "./models/Ingredient.model";

export const nameContains = (substring: string): (
    (item: Ingredient) => boolean
) => (
    ({name}) => name.toLowerCase().includes(substring.toLowerCase())
);

export const nameDoesNotContain = (substring: string): (
    (item: Ingredient) => boolean
) => (
    ({name}) => !name.toLowerCase().includes(substring.toLowerCase())
);

export const sharesEffect = (ingredients: Ingredient[]): (
    (item: Ingredient) => boolean
) => {
    const ingredientEffectsReducer: (ingredient: Ingredient) => any = ({effects}) => {
        // Accept an Ingredient and return an Object with "[effect]: true" for ingredient's effects
        return effects.reduce((obj, effect) => Object.assign(obj, {[effect]: true}), {});
    };
    const filterEffects = ingredients.reduce((effects, ingredient) => (
        // Reduce all ingredients into one effects object
        Object.assign(effects, ingredientEffectsReducer(ingredient))
    ), {});
    // TODO: improve efficiency, especially in cases where first effect is a match
    return ({effects}) => effects.reduce((shares, effect) => shares || filterEffects[effect], false)
};
