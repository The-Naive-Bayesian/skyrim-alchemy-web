import * as React from 'react';
import {IngredientProvider} from "./IngredientFilter";
import {IngredientList} from "./IngredientList";
import './Main.css';
import {Ingredient} from "../models/Ingredient.model";
import {SelectedIngredientItem} from "./SelectedIngredientItem";

export class Main extends React.Component<{}, {filterString: string, selectedIngredients: Ingredient[]}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            filterString: '',
            selectedIngredients: []
        }
    }

    public handleInput = (event: any) => {
        const filterString = event.target.value;
        this.setState({
            filterString
        });
    };

    public handleIngredientSelection = (ingredient: Ingredient) => {
        this.setState({
            selectedIngredients: [
                ...this.state.selectedIngredients,
                ingredient
            ]
        });
    };

    public render() {
        const {filterString, selectedIngredients} = this.state;
        return (
            <main>
                <input
                    type={'text'}
                    placeholder={'Ingredient'}
                    onChange={this.handleInput}
                    value={filterString}
                />
                {
                    this.state.selectedIngredients.map(ingredient => (
                        <SelectedIngredientItem ingredient={ingredient}/>
                    ))
                }
                <IngredientProvider
                    filterString={filterString}
                    selectedIngredients={selectedIngredients}
                    render={(ingredients) => (
                        <IngredientList ingredients={ingredients} onSelect={this.handleIngredientSelection} />
                )}/>
            </main>
        )
    }
}
