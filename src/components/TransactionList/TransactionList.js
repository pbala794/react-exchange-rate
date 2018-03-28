import React, { Component } from 'react';

import './TransactionList.css';

class TransactionList extends Component {

  render() {
      
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
          </ul>
        </div>
              
      );
      
  }
  
}

export default TransactionList;