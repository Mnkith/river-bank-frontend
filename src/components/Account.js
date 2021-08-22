import React from "react";


const Account = (props) => {
  return (
    <tr>
          <td>{ props.index + 1 }</td>
          <td>{ props.account.available_balance }</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
  )
}

export default Account