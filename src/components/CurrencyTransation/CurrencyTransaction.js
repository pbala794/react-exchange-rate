import React, { Component } from 'react';
import './CurrencyTransaction.css';

class CurrencyTransaction extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(e) {
        this.props.onInputChange(e.target.value);
    }
    
    render() {
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
                            <input type="text" id="amount" />
                        </div>
                        <img src="img/euro.svg" alt="eur-icon" />
                        <div>
                            <label for="amount-pln">PLN</label>
                            <input type="text" id="amount" />
                        </div>
                    </div>
               </form>
           </div>
           
          </div>
        );
    }
    
}

export default CurrencyTransaction;