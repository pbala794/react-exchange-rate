import React, { Component } from 'react';

import './TransactionList.css';

class TransactionList extends Component {
  
  constructor(props) {
    super(props);
    
    this.calcMaxTransaction = this.calcMaxTransaction.bind(this);
    // this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  
  componentDidMount() {
    console.log('component did mount');
  }
  
  componentDidUpdate() {
    console.log('component updated');
  }
  
  calcMaxTransaction() {
    const {transactions} = this.props;
    const valueArr = transactions.map((value) => (
      value.convertedPlnAmout
    ));
    const maxValue = Math.max(...valueArr);
    
    return maxValue > 0 ? maxValue : '';
  }
  
  render() {
      const {transactions} = this.props; 
      let transactionSumEur = 0;
      let transactionSumPln = 0;
      
      return (
        <div>
          <h3>Historia Twoich transakcji</h3>
          {transactions.length > 0 ? 
            <div>
              <div className="top-transaction-wrapper">
                <p>Transakcja z najwyższą kwotą: </p>
                <span>{ this.calcMaxTransaction() }</span>
              </div>
              <ul className="transaction-list">
                {
                  transactions.map( (transaction, index) => {
                    transactionSumEur += Number(transaction.currencyAmount);
                    transactionSumPln += Number(transaction.convertedPlnAmout);
                    
                    return (
                      <li key={ index }
                          name={`transaction-${index}`}>
                        <span className="transaction-name">
                          {transaction.transactionName}
                          <span className="delete-cross" onClick={ () => this.props.onDeleteItem(transaction.transactionName) } >X</span>
                        </span>
                        <span>
                          {transaction.currencyAmount} EUR | {transaction.convertedPlnAmout} PLN
                        </span>
                        <div className="arrow-down"></div>
                      </li>
                    )
                  })
                }
              </ul>
              <hr className="underline" />
              <span className="list-sum">
                Suma transakcji: <br/>
                {transactions.length > 0 ? ' EUR ' + transactionSumEur.toFixed(2) + ' PLN ' + transactionSumPln.toFixed(2) : ' 0'}
              </span>
            </div>
          : <p>Brak historii</p> }
        </div>
              
      );
      
  }
  
}

export default TransactionList;