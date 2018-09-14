import * as React from 'react';
import {IngredientProvider} from "./IngredientFilter";
import {IngredientList} from "./IngredientList";
import './Main.css';
import {Ingredient} from "../models/Ingredient.model";
import {SelectedIngredientItem} from "./SelectedIngredientItem";
import {EffectsList} from "./EffectsList";

interface IMainState {
    filterString: string;
    filterEffects: string[];
    selectedIngredients: Ingredient[];
}

export class Main extends React.Component<{}, IMainState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            filterString: '',
            filterEffects: [],
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
                filterString: '',
                filterEffects: [],
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

    public toggleEffectSelection = (effectName: string): void => {
        const currentEffects = this.state.filterEffects;
        const index = currentEffects.findIndex(effect => effect === effectName);

        if (index > -1) {
            this.setState({
                filterEffects: [
                    ...currentEffects.slice(0, index),
                    ...currentEffects.slice(index + 1)
                ]
            });
        } else {
            this.setState({
                filterEffects: [...currentEffects, effectName]
            });
        }
        console.log(this.state);
    };

    public render() {
        const {filterString, filterEffects, selectedIngredients} = this.state;
        const selectedIngredientEffects = selectedIngredients
            .map(ing => ing.effects)
            .reduce((effects, ingredientEffects) => [...effects, ...ingredientEffects], [])
        return (
            <main>
                <input
                    type={'text'}
                    placeholder={'Ingredient or effect'}
                    onChange={this.handleInput}
                    value={filterString}
                />
                <EffectsList
                    ingredients={this.state.selectedIngredients}
                    toggleEffectSelection={this.toggleEffectSelection}
                    filteredEffects={[...filterEffects, filterString]}
                />
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
                    filterEffects={filterEffects}
                    selectedIngredients={selectedIngredients}
                    render={(ingredients) => (
                        <IngredientList
                            ingredients={ingredients}
                            onSelect={this.handleIngredientSelection}
                            selectedEffects={selectedIngredientEffects}
                        />
                )}/>
            </main>
        )
    }
}
