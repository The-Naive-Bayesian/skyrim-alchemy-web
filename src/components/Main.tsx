import * as React from 'react';
import {IngredientProvider} from "./IngredientFilter";
import {IngredientList} from "./IngredientList";
import './Main.css';
import {Ingredient} from "../models/Ingredient.model";
import {SelectedIngredientItem} from "./SelectedIngredientItem";
import {EffectsList} from "./EffectsList";

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

    public handleIngredientSelection = (ingredient: Ingredient): void => {
        if (this.state.selectedIngredients.length < 3) {
            this.setState({
                selectedIngredients: [
                    ...this.state.selectedIngredients,
                    ingredient
                ]
            });
        } else {
            console.warn('Attempted to add more than 3 allowed ingredients');
        }
    };

    public handleIngredientDeselection = (ingredientName: string): void => {
        const {selectedIngredients} = this.state;
        this.setState({
            selectedIngredients: selectedIngredients.filter(({name}) => name !== ingredientName)
        });
    };

    public render() {
        const {filterString, selectedIngredients} = this.state;
        return (
            <main>
                <input
                    type={'text'}
                    placeholder={'Ingredient or effect'}
                    onChange={this.handleInput}
                    value={filterString}
                />
                <EffectsList ingredients={this.state.selectedIngredients} />
                {
                    this.state.selectedIngredients.map(ingredient => (
                        <SelectedIngredientItem
                            key={ingredient.name}
                            ingredient={ingredient}
                            onDeselect={this.handleIngredientDeselection}
                        />
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
