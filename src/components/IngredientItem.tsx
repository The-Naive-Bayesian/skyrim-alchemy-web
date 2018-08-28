import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";
import './IngredientItem.css';
import {AddIcon} from "./icons/add";

export class IngredientItem extends React.Component<{ingredient: Ingredient}, {expanded: boolean}> {
    constructor(props: {ingredient: Ingredient}) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    public render() {
        const {ingredient} = this.props;
        const {expanded} = this.state;
        return (
            <li className={'ingredient-item'} onClick={this.handleClick}>
                <span>
                    <div className={'icon-container'}>
                        <AddIcon style={{backgroundColor: 'green', color: 'white'}}/>
                    </div>
                <h2>{ingredient.name}</h2>
                </span>
                {
                    expanded
                        ? ingredient.effects.map(effect => <p key={effect}>{effect}</p>)
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
