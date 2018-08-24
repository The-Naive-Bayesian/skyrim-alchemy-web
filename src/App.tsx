import * as React from 'react';
import './App.css';
import {IngredientList} from './components/IngredientList';
import ingredients from './data/mock-data';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header>
                    Alchemy
                </header>
                <main>
                    <IngredientList ingredients={ingredients} />
                    <input type={'text'} placeholder={'Ingredient'} />
                </main>
            </div>
        );
    }
}

export default App;
