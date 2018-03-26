import React, { Component } from 'react';
import './CurrencyTransaction.css';

class CurrencyTransaction extends Component {
    
    render() {
        return (
          <div>
          
            <h2>Podaj kurs euro:</h2>
            <span className="eur-input">
                <img src="img/euro.svg" alt="eur-icon" />
                <input type="text" id="rate" placeholder="1 EUR = 0.00 PLN" pattern="\d+(.\d)?" />
            </span>
            
            <div className="transaction-content">
               <h3>Dodaj nową transakcję</h3>
               <form>
                    <label for="name">Nazwa transakcji</label>
                    <input type="text" id="name" />
                    <label for="amoun">Kwota (EUR)</label>
                    <input type="text" id="amount" />
               </form>
           </div>
           
          </div>
        );
    }
    
}

export default CurrencyTransaction;