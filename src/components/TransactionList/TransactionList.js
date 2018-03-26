import React, { Component } from 'react';

import './TransactionList.css';

class TransactionList extends Component {
    
    render() {
        
        return (
          
          <div>
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