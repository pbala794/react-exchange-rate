import React, { Component } from 'react';

import CurrencyTransaction from '../CurrencyTransation/CurrencyTransaction';
import TransactionList from '../TransactionList/TransactionList';

import './App.css';

class App extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        currencyRate: 0
      };
      this.handleEurRateInput = this.handleEurRateInput.bind(this);
      
    }
    
    handleEurRateInput(inputValue) {
      this.setState({currencyRate: inputValue}, () => {
          console.log(this.state);
      });
    }
  
    render() {
      // const currencyRate = this.state.currencyRate;
      
        return(
          <div className="app-container">
            <CurrencyTransaction onInputChange={ this.handleEurRateInput } />
            <TransactionList />
          </div>
        );
    }
}

export default App;