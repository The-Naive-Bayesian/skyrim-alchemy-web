import * as React from 'react';
import {Ingredient} from "../models/Ingredient.model";
import './IngredientItem.css';

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
                        <svg width={20} height={20}><circle cx={10} cy={10} r={10} fill={'green'}/></svg>
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
