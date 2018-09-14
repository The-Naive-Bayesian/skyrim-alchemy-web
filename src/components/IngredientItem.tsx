import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";
import './IngredientItem.css';
import {AddIcon} from "./icons/add";

interface IngredientItemProps {
    ingredient: Ingredient;
    onSelect: (ingredient: Ingredient)=>void;
    selectedEffects: string[];
}

export class IngredientItem extends React.Component<IngredientItemProps, {expanded: boolean, selectedEffects: string[]}> {
    constructor(props: IngredientItemProps) {
        super(props);
        this.state = {
            expanded: false,
            selectedEffects: []
        };
    }

    componentWillReceiveProps(props: IngredientItemProps) {
        this.setState({
            selectedEffects: props.selectedEffects
        });
    }

    public render() {
        const {ingredient, onSelect} = this.props;
        const {expanded, selectedEffects} = this.state;
        return (
            <li className={'ingredient-item'} onClick={this.handleClick}>
                <span>
                    <div className={'icon-container'} onClick={() => onSelect(ingredient)}>
                        <AddIcon style={{backgroundColor: 'green', color: 'white'}}/>
                    </div>
                <h2>{ingredient.name}</h2>
                </span>
                {
                    expanded
                        ? ingredient.effects.map(effect => {
                            const sharedEffect = selectedEffects.some(e => e===effect);
                            return (
                                <p
                                    key={effect}
                                    style={sharedEffect ? {color: 'green', fontWeight: 'bolder'} : {}}
                                >
                                    {effect}
                                </p>
                            )})
                        : null
                }
            </li>
        );
    }

    private handleClick = () => {
        const {expanded} = this.state;
        this.setState({
            expanded: !expanded
        });
    };
}
