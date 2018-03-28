import React, { Component } from 'react';

import CurrencyTransaction from '../CurrencyTransation/CurrencyTransaction';
import TransactionList from '../TransactionList/TransactionList';

import './App.css';

class App extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        currencyRate: 0,
        currencyAmount: 0
      };
      this.handleEurRateInput = this.handleEurRateInput.bind(this);
      this.handleConvert = this.handleConvert.bind(this);
      this.convertToPLN = this.convertToPLN.bind(this);
      
    }
    
    handleEurRateInput(inputValue) {
      this.setState({currencyRate: inputValue});
    }
    
    handleConvert(value) {
      this.setState({ currencyAmount: value });
    }
    
    convertToPLN() {
      const {currencyRate, currencyAmount} = this.state;
      
      return currencyRate * currencyAmount;
    }
  
    render() {
      const convertedPlnAmout = this.convertToPLN();
      
        return(
          <div className="app-container">
            <CurrencyTransaction 
              onInputChange={ this.handleEurRateInput } 
              onCurrencyConvert={ this.handleConvert }
              convertedPlnAmout={ convertedPlnAmout }
            />
            <TransactionList />
          </div>
        );
    }
}

export default App;