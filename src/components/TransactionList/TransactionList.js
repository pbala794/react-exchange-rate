import React, { Component } from 'react';

import './TransactionList.css';

class TransactionList extends Component {

  render() {
      const {transactions} = this.props; 
      let transactionSumEur = 0;
      let transactionSumPln = 0;
      
      return (
        <div>
          <h3>Historia Twoich transakcji</h3>
          <div className="top-transaction-wrapper">
            <p>Transakcja z najwyższą kwotą: </p>
            <span>Zakup samochodu: 75000</span>
          </div>
          <ul className="transaction-list">
            <li>Transakcja 1</li>
            <li>Transakcja 2</li>
            <li>Transakcja 3</li>
            <li>Transakcja 4</li>
            <li>Transakcja 5</li>
            <li>Transakcja 6</li>
            {
              transactions.map( transaction => {
                transactionSumEur += Number(transaction.currencyAmount);
                transactionSumPln += Number(transaction.convertedPlnAmout);
                
                return (
                  <li>
                    <span>{transaction.transactionName}</span> | 
                    {transaction.currencyAmount} | 
                    {transaction.convertedPlnAmout}
                  </li>
                )
              })
            }
          </ul>
          <span className="list-sum">
            Suma transakcji: <br/>
            {transactions.length > 0 ? ' EUR ' + transactionSumEur + ' PLN ' + transactionSumPln : ' 0'}
          </span>
        </div>
              
      );
      
  }
  
}

export default TransactionList;