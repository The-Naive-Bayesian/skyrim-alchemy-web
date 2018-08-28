import {Ingredient} from "../models/Ingredient.model";

export class IngredientCollection {
    public ingredients: Ingredient[];

    constructor(ingredients: Ingredient[] = []) {
        this.ingredients = ingredients;
    }

    public get effects(): any {
        // Return object with key:value pairs of "[effect]: true" for all ingredients in this.ingredients
        // e.g. {'restore health': true}
        return this.ingredients.reduce((obj, ingredient) => Object.assign(
            obj,
            this.ingredientToEffects(ingredient)
        ), {});
    }

    private ingredientToEffects(ingredient: Ingredient): any {
        // Return object with key:value pairs of "[effect]: true" for provided ingredient
        // e.g. {'restore health': true}
        const {effects} = ingredient;
        return effects.reduce((obj, effect) => Object.assign(
            obj,
            {[effect]: true}
        ), {});
    }
}
