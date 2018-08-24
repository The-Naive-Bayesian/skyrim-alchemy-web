import * as React from 'react';
import {IngredientProvider} from "./IngredientFilter";
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
        const {filterString} = this.state;
        return (
            <main>
                <IngredientProvider filterString={filterString} render={(ingredients) => (
                    <IngredientList ingredients={ingredients} />
                )}/>
                <input
                    type={'text'}
                    placeholder={'Ingredient'}
                    onChange={this.handleInput}
                    value={filterString}
                />
            </main>
        )
    }
}
