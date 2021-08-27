import React from "react";
import Table from 'react-bootstrap/Table';
import Account from '../components/Account'
import { Route, useParams, Switch } from "react-router-dom";
import TransactionsList from './TransactionsList'

const AccountsList = ({ accounts }) => {
  const account_id = parseInt(useParams().id)
  // debugger
  return (
    <p class='container'>
      <Switch>
        <Route path='/:id/transactions' render={rp => <TransactionsList {...rp} account= {accounts.find( account => account.id === account_id )} />} />
      </Switch>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Account Type</th>
            <th>Current Ballance</th>
            {/* <th>Account Number</th> */}
            <th>Expiration Date</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => <Account className='lead h4' key={index} account={account} index={index} />)}
        </tbody>
      </Table>
      
      </p>
  )
}

export default AccountsList