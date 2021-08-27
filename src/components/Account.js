import React from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


const Account = (props) => {
  console.log(props.account)
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.account.account_type}</td>
      <td>{props.account.available_balance}</td>
      <td>{props.account.exp}</td>
      <td><Button variant="primary">
        Profile <Badge bg="secondary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button></td>
    </tr>
  )
}

export default Account