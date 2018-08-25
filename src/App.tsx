import * as React from 'react';
import './App.css';
import {Main} from "./components/Main";

class App extends React.Component {
    public render() {
        return (
            <div className="App" style={{minHeight: window.innerHeight}}>
                <header>
                    Alchemy
                </header>
                <Main />
            </div>
        );
    }
}

export default App;
