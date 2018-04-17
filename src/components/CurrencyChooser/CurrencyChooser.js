/*global fetch*/

import React, { Component } from 'react';

import './CurrencyChooser.css';

class CurrencyChooser extends Component {
    
    constructor(props) {
        super(props);
        this.fetchedCurrencies = {};
        
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    
    componentDidMount() {
        fetch('http://api.nbp.pl/api/exchangerates/tables/a')
            .then(res => res.json())
            .then(data => {
                const selectedCurrencies = ['EUR', 'USD', 'GBP'];
                const currencies = data[0].rates.filter(rate => { 
                    return selectedCurrencies.includes(rate.code);
                });
                
                const usdCurrencyValue = currencies.filter(currency => currency.code === 'USD')[0].mid,
                      eurCurrencyValue = currencies.filter(currency => currency.code === 'EUR')[0].mid,
                      gbpCurrencyValue = currencies.filter(currency => currency.code === 'GBP')[0].mid;
                
                this.fetchedCurrencies = {
                  usd: usdCurrencyValue,
                  eur: eurCurrencyValue,
                  gbp: gbpCurrencyValue
                };
            });
    }
    
    onSelectChange() {
        const selectList = document.getElementById('currency-options');
        
        if(Object.keys(this.fetchedCurrencies).length !== 0) {
            switch (selectList.selectedIndex) {
                case 1:
                    this.props.onSelectChange(this.fetchedCurrencies.usd)
                    break;
                
                case 2:
                    this.props.onSelectChange(this.fetchedCurrencies.eur)
                    break;
                    
                case 3:
                    this.props.onSelectChange(this.fetchedCurrencies.gbp)
                    break;
                
                default:
                    break;
            }
        }
    }
    
    render() {
        return (
            <div className="currency-dropdown">
                <select id="currency-options" onChange={ this.onSelectChange }>
                    <option>Wybierz</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>
            </div>      
        );
    }
    
}

export default CurrencyChooser;