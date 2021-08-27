import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Transaction from '../components/Transaction'
import { Route, useParams, Switch } from "react-router-dom";

export default function TransactionList(props) {
  const transactions = props.accounts[useParams().id - 1].transactions
  return (
    // <p>ghhh</p>
    <p  >
  <Card backdrop border="primary" style={{ width: '80%', 'z-index': '2000' }} className='  position-absolute centered start-50 translate-middle-x'>
  <Card.Body>
    <Card.Title>Transactions</Card.Title>
    <Card.Text>
    <Table striped bordered hover>
        <thead class='bg-primary text-light'>
          <tr > 
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
          {transactions.map((transaction, index) => <Transaction className='lead h4' key={index} transaction={transaction} index={index} />)}
        </tbody>
      </Table>
    </Card.Text >
    
  </Card.Body>
  <Card.Footer className='text-end'>
      <Button href='/munkith'  variant="primary">Back to Accounts</Button>
    </Card.Footer>
</Card>
  </p>

  )
}