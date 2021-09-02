import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Transaction from '../components/Transaction'

  function TransactionsList({ accounts, userName, match }) {
  // const transactions = props.accounts[useParams().id - 1].transactions
  let account = accounts.find( acc => acc.id === parseInt(match.params.id))
  return (
    // <p>ghhh</p>
    <>
  <Card  border="primary" style={{ width: '80%', 'zIndex': '2000' }} className='  position-absolute centered start-50 translate-middle-x'>
  <Card.Body>
    <Card.Title>Transactions</Card.Title>
    {/* <Card.Text> */}
    <Table striped bordered hover>
        <thead className='bg-primary text-light'>
          <tr > 
            <th>#</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
          {account.transactions.map((transaction, index) => <Transaction className='lead h4' key={index} transaction={transaction} index={index} />)}
        </tbody>
      </Table>
    {/* </Card.Text > */}
    
  </Card.Body>
  <Card.Footer className='text-end'>
      <Button href={`/${userName}`} variant="primary">Back to Accounts</Button>
    </Card.Footer>
</Card>
  </>

  )
}

export {TransactionsList}