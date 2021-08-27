import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function TransactionList() {
  return (
    // <p>ghhh</p>
    <p  >
      <Card backdrop border="primary" style={{ width: '80%', 'z-index': '2000', opacity: .9  }} className='  position-absolute centered start-50 translate-middle-x'>
  <Card.Body>
    <Card.Title>Transactions</Card.Title>
    <Card.Text>
    <Table striped bordered hover>
        <thead class='bg-primary text-light'>
          <tr > 
            <th>#</th>
            <th>Account Type</th>
            <th>Current Ballance</th>
            {/* <th>Account Number</th> */}
            <th>Expiration Date</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody class="card text-white bg-secondary mb-3">
          {/* {accounts.map((account, index) => <Account className='lead h4' key={index} account={account} index={index} />)} */}
        </tbody>
      </Table>
    </Card.Text >
    
  </Card.Body>
  <Card.Footer className='text-end'>
      <Button href='/munkith'  variant="primary">Go somewhere</Button>
    </Card.Footer>
</Card>
  </p>

  )
}