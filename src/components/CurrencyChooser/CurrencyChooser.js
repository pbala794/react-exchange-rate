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
        fetch('http://data.fixer.io/api/latest?access_key=df01e715e67c6a9c5a63e42ddd7faba8&base=EUR&symbols=USD,PLN,GBP')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    USD: data.rates.USD,
                    EUR: data.rates.PLN,
                    GBP: data.rates.GBP,
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