/*global fetch*/

import React, { Component } from 'react';

import './CurrencyChooser.css';

class CurrencyChooser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            USD: 0,
            EUR: 0,
            GBP: 0
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidMount() {
        fetch('http://api.nbp.pl/api/exchangerates/tables/a')
            .then(res => res.json())
            .then(data => {
                const selectedCurrencies = ['EUR', 'USD', 'GBP'];
                const currencies = data[0].rates.filter(rate => { 
                    return selectedCurrencies.includes(rate.code);
                });
                
                const usdCurrencyValue = currencies.filter(currency => currency.code === 'USD')[0],
                      eurCurrencyValue = currencies.filter(currency => currency.code === 'EUR')[0],
                      gbpCurrencyValue = currencies.filter(currency => currency.code === 'GBP')[0];
                
                this.setState({
                    USD: usdCurrencyValue.mid,
                    EUR: eurCurrencyValue.mid,
                    GBP: gbpCurrencyValue.mid
                })
            });
    }
    
    handleOptionChange(e) {
        
    }
    
    render() {
        return (
            <div className="currency-dropdown">
                <select name="currency-options" onChange={this.handleOptionChange}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>
            </div>      
        );
    }
    
}

export default CurrencyChooser;