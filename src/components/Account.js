import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import handleShow from '../containers/TransactionsList'


const Account = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <> 
     

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      <tr class='lead '>
      <td>{props.index + 1}</td>
      <td>{props.account.account_type}</td>
      <td>{props.account.available_balance}</td>
      <td>{props.account.exp}</td>
      <td><Button href="/transactions" variant="primary" >
        Show transactions <Badge pill bg="info">{props.account.transactions.length}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button></td>

    </tr>
    </>
    
    
  )
}

export default Account