import * as React from 'react';
import ingredients from "../data/mock-data";
import {IngredientList} from "./IngredientList";

export const Main = () => (
    <main>
        <IngredientList ingredients={ingredients} />
        <input type={'text'} placeholder={'Ingredient'} />
    </main>
);
