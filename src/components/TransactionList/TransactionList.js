import React, { Component } from 'react';

import './TransactionList.css';

class TransactionList extends Component {
  
  constructor(props) {
    super(props);
    
    this.calcMaxTransaction = this.calcMaxTransaction.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  
  calcMaxTransaction() {
    const {transactions} = this.props;
    const valueArr = transactions.map((value) => (
      value.convertedPlnAmout
    ));
    const maxValue = Math.max(...valueArr);
    
    return maxValue > 0 ? maxValue : '';
  }
  
  handleDeleteItem(e) {
    this.props.onDeleteItem(e.target.attributes);
  }

  render() {
      const {transactions} = this.props; 
      let transactionSumEur = 0;
      let transactionSumPln = 0;
      
      return (
        <div>
          <h3>Historia Twoich transakcji</h3>
          <div className="top-transaction-wrapper">
            <p>Transakcja z najwyższą kwotą: </p>
            <span>{ this.calcMaxTransaction() }</span>
          </div>
          <ul className="transaction-list">
            {
              transactions.map( transaction => {
                transactionSumEur += Number(transaction.currencyAmount);
                transactionSumPln += Number(transaction.convertedPlnAmout);
                
                return (
                  <li key={ transaction.transactionName }>
                    {transaction.transactionName} 
                    {transaction.currencyAmount} | 
                    {transaction.convertedPlnAmout}
                    <span onClick={ this.handleDeleteItem } >X</span>
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