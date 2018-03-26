import React, { Component } from 'react';
import CurrencyTransaction from '../CurrencyTransation/CurrencyTransaction';

import './App.css';

class App extends Component {
    render() {
        return(
          <div className="app-container">
            <CurrencyTransaction />
          </div>
        );
    }
}

export default App;