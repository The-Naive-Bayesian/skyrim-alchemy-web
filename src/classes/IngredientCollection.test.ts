import {IngredientCollection} from "./IngredientCollection";
import {Ingredient} from "../models/Ingredient.model";

describe('IngredientCollection', () => {
    it('builds without parameters', () => {
        const collection = new IngredientCollection();
        expect(collection).toBeTruthy();
    });
    it('stores ingredients passed to constructor', () => {
        const ingredients: Ingredient[] = [{name: 'a', effects: ['a']}, {name: 'b', effects: ['b']}];
        const collection = new IngredientCollection(ingredients);
        expect(collection.ingredients).toEqual([{name: 'a', effects: ['a']}, {name: 'b', effects: ['b']}]);
    });

    describe('get effects', () => {
        it('returns object with key for each effect', () => {
            const ingredients: Ingredient[] = [{name: 'a', effects: ['c', 'd']}, {name: 'b', effects: ['e']}];
            const collection = new IngredientCollection(ingredients);
            expect(
                Object.keys(collection.effects)
            ).toEqual(
                ['c', 'd', 'e']
            );
        });
        it('returns object mapping each effect to true', () => {
            const ingredients: Ingredient[] = [{name: 'a', effects: ['c', 'd']}, {name: 'b', effects: ['e']}];
            const collection = new IngredientCollection(ingredients);
            expect(
                collection.effects
            ).toEqual(
                {c: true, d: true, e: true}
            );
        });
    });
});
