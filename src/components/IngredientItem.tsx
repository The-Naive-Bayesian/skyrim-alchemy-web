import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";

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
                <h2>{ingredient.name}</h2>
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
