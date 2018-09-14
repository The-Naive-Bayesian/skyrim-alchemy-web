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

export const effectNamesContain = (substring: string): (
    (item: Ingredient) => boolean
) => (
    ({effects}) => effects.some(
        effect => effect.toLowerCase().includes(substring.toLowerCase())
    )
);

export const effectOrNameContains = (substring: string): (
    (item: Ingredient) => boolean
) => (
    ({name, effects}) => name.toLowerCase().includes(substring.toLowerCase()) || effects.some(
        effect => effect.toLowerCase().includes(substring.toLowerCase())
    )
);

export const sharesEffect = (ingredients: Ingredient[]): (
    (item: Ingredient) => boolean
) => {
    const ingredientEffectsReducer: (ingredient: Ingredient) => any = ({effects}) => {
        // Accept an Ingredient and return an Object with "[effect]: 1" for ingredient's effects
        return effects.reduce((obj, effect) => Object.assign(obj, {[effect]: 1}), {});
    };
    const filterEffects = ingredients.reduce((effects, ingredient) => {
        // Reduce all ingredients into one effects object
        for (let effect in ingredientEffectsReducer(ingredient)) {
            if (effects[effect]) {
                effects[effect] += 1;
            } else {
                effects[effect] = 1;
            }
        }
        return effects;
    }, {});

    // TODO: improve efficiency, especially in cases where first effect is a match
    return ({effects}) => effects.reduce((shares, effect) => shares || filterEffects[effect] === 1, false)
};
