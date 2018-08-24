import {Ingredient} from "./models/Ingredient.model";

export const nameContains = (substring: string): (
    (item: Ingredient) => boolean
) => (
    ({name}) => name.toLowerCase().includes(substring.toLowerCase())
);
