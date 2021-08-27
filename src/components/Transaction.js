import React from "react";

export default function Transaction(props) {
  return (
    <>
      <tr class='lead '>
        <td>{props.index + 1}</td>
        <td>{props.transaction.transaction_date}</td>
        <td>{props.transaction.description}</td>
        <td>${props.transaction.amount}</td>
       
      </tr>
    </>
  )
}