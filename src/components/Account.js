import React from "react";


const Account = ( props ) => {
  console.log(props.account)
  return (
    <tr>
          <td>{ props.index + 1 }</td>
          <td>{ props.account.account_type }</td>
          <td>{ props.account.available_balance }</td>
          <td>{ props.account.exp }</td>
        </tr>
  )
}

export default Account