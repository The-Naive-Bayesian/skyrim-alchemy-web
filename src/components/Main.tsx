import * as React from 'react';
import ingredients from "../data/mock-data";
import {IngredientList} from "./IngredientList";
import './Main.css';

export class Main extends React.Component<{}, {filterString: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            filterString: ''
        }
    }

    public handleInput = (event: any) => {
        const filterString = event.target.value;
        this.setState({
            filterString
        });
    };

    public render() {
        return (
            <main>
                <IngredientList ingredients={ingredients} />
                <input
                    type={'text'}
                    placeholder={'Ingredient'}
                    onChange={this.handleInput}
                    value={this.state.filterString}
                />
            </main>
        )
    }
}
