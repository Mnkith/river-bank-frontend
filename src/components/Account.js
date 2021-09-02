import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Account = (props) => {
  return (
    <>
      <tr className='lead'>
        <td>{props.index + 1}</td>
        <td>{props.account.account_type}</td>
        <td>${props.account.available_balance}</td>
        <td>{props.account.exp}</td>
        {console.log(props.account)}
        <td><Button href={`/${props.account.id}/transactions`} variant="primary" >
          Show transactions <Badge pill bg="info">{props.account.transactions.length}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button></td>
      </tr>
    </>


  )
}

export default Account