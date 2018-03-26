import React, { Component } from 'react';

import CurrencyTransaction from '../CurrencyTransation/CurrencyTransaction';
import TransactionList from '../TransactionList/TransactionList';

import './App.css';

class App extends Component {
    render() {
        return(
          <div className="app-container">
            <CurrencyTransaction />
            <TransactionList />
          </div>
        );
    }
}

export default App;