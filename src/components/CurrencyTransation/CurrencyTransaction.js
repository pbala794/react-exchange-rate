import React, { Component } from 'react';
import './CurrencyTransaction.css';

class CurrencyTransaction extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCurrencyConvert = this.handleCurrencyConvert.bind(this);
    }
    
    handleInputChange(e) {
        const inputValue = (e.target.value).replace(/,/g, '.')
        this.props.onInputChange(parseFloat( inputValue ));
    }
    
    handleCurrencyConvert(e) {
        this.props.onCurrencyConvert(e.target.value);
    }
    
    render() {
        const {convertedPlnAmout} = this.props;
        
        return (
          <div>
          
            <h2>Podaj kurs euro:</h2>
            <span className="eur-input">
                <img src="img/euro.svg" alt="eur-icon" />
                <input type="text" id="rate" placeholder="1 EUR = 0.00 PLN" pattern="\d+(.\d)?" onChange={ this.handleInputChange } />
            </span>
            
            <div className="transaction-content">
               <h3>Dodaj nową transakcję</h3>
               <form>
                    <label for="name">Nazwa transakcji</label>
                    <input type="text" id="name" />
                    <div className="exchange-box">
                        <div>
                            <label for="amount-eur">EUR</label>
                            <input type="text" id="amount-eur" onChange={ this.handleCurrencyConvert } />
                        </div>  
                        <img src="img/euro.svg" alt="eur-icon" />
                        <div>
                            <label for="amount-pln">PLN</label>
                            <input type="text" id="amount-pln" value={convertedPlnAmout} onChange={ this.handleCurrencyConvert } disabled />
                        </div>
                        <button type="button" >Zapisz</button>
                    </div>
               </form>
           </div>
           
          </div>
        );
    }
    
}

export default CurrencyTransaction;