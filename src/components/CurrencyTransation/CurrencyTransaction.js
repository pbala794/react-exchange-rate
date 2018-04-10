import React, { Component } from 'react';
import './CurrencyTransaction.css';

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
                <p>Podaj kurs euro:</p>
                <div className="eur-input">
                    <img src="img/euro.svg" alt="eur-icon" />
                    <input type="text" id="rate" placeholder="1 EUR = ... PLN" pattern="\d+(.\d)?" 
                        onChange={ this.handleInputChange } 
                    />
                </div>
            </header>

            <div className="transaction-content">
               <h3>Dodaj nową transakcję</h3>
               <form onSubmit={ this.handleTransactionSave }>
                    <label for="name">Nazwa transakcji</label>
                    <input type="text" id="name" 
                        onChange={ this.handleTransactionNameInput } 
                        required 
                        autocomplete="off" 
                    />
                    <div className="exchange-box">
                        <div className="exchange-box__currencies">
                            <div>
                                <label for="amount-eur">EUR</label>
                                <input type="text" id="amount-eur" defaultValue={0} onChange={ this.handleCurrencyConvert } />
                            </div>  
                            <img src="img/euro.svg" alt="eur-icon" />
                            <div>
                                <label for="amount-pln">PLN</label>
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