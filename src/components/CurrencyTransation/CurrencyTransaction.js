import React, { Component } from 'react';
import './CurrencyTransaction.css';

import CurrencyChooser from '../CurrencyChooser/CurrencyChooser';

class CurrencyTransaction extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCurrencyConvert = this.handleCurrencyConvert.bind(this);
        this.handleTransactionSave = this.handleTransactionSave.bind(this);
        this.handleTransactionNameInput = this.handleTransactionNameInput.bind(this);
    }
    
    handleInputChange(e) {
        const inputValue = (e.target.value).replace(/,/g, '.')
        this.props.onInputChange(parseFloat( inputValue ));
    }
    
    handleCurrencyConvert(e) {
        this.props.onCurrencyConvert(e.target.value);
    }
    
    handleTransactionSave(e) {
        e.preventDefault();
        this.props.onTransactionSave();
    }
    
    handleTransactionNameInput(e) {
        this.props.onNameChange(e.target.value);
    }
    
    render() {
        const {convertedPlnAmout} = this.props;
        
        return (
          <div>
            <h1 className="app-title"><span>Ex</span>Change Machine</h1>
            <header className="top-header">
                <p>Pobierz aktualne kursy walut do złotego:</p>
                <div className="currency-rate-wrapper">
                    <div className="eur-input">
                        <input type="text" id="rate" placeholder="1 ... = ... PLN" pattern="\d+(.\d)?" 
                            value={ this.props.currencyRateValue }
                            onChange={ this.handleInputChange }
                            disabled
                        />
                    </div>
                    <CurrencyChooser onSelectChange={(currency) => this.props.onSelectChange(currency)}/>
                </div>
            </header>
            
            <div className="transaction-content">
               <h3>Dodaj nową transakcję</h3>
               <form onSubmit={ this.handleTransactionSave }>
                    <label htmlFor="name">Nazwa transakcji</label>
                    <input type="text" id="name" 
                        onChange={ this.handleTransactionNameInput } 
                        value={ this.props.nameValue }
                        required 
                        autoComplete="off"
                    />
                    <div className="exchange-box">
                        <div className="exchange-box__currencies">
                            <div>
                                <label htmlFor="amount-eur">{ this.props.currencyCode }</label>
                                <input type="text" id="amount-eur" 
                                    value={ this.props.currencyValue } 
                                    onChange={ this.handleCurrencyConvert }
                                    autoComplete="off"
                                    required
                                />
                            </div>  
                            <img src="img/euro.svg" alt="eur-icon" />
                            <div>
                                <label htmlFor="amount-pln">PLN</label>
                                <input type="text" id="amount-pln" value={convertedPlnAmout} onChange={ this.handleCurrencyConvert } disabled />
                            </div>
                        </div>
                        <button type="submit">Zapisz</button>
                    </div>
               </form>
           </div>
           
          </div>
        );
    }
    
}

export default CurrencyTransaction;