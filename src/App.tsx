import * as React from 'react';
import './App.css';
import ingredients from './data/mock-data';
import {IngredientList} from './components/IngredientList';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header>
                    Alchemy
                </header>
                <main>
                    <IngredientList ingredients={ingredients} />
                </main>
                <input type={'text'} placeholder={'Ingredient'} />
            </div>
        );
    }
}

export default App;
