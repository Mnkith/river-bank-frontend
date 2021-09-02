import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { connect } from "react-redux";
import Transaction from '../components/Transaction'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';

class AllTransactions extends React.Component {
  // const transactions = props.accounts[useParams().id - 1].transactions
  at = this.props.data.accounts.map(acc => acc.transactions).flat()


  state = {
    keyWord: '',
    transactions: this.at
  };

  // const at = props.data.accounts.map(acc => acc.transactions.map((transaction, index) => <Transaction className='lead h4' key={index} transaction={transaction} index={index} />))

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const capped = capitalize(this.state.keyWord)


    const filtered = this.at.filter(t => t.description === capped)
    if (filtered.length > 0)
      this.setState({
        transactions: filtered
      });
    else this.resetTransactions()


  }
  resetTransactions = (event) => {
    this.setState({
      keyWord: '',
      transactions: this.at
    });
  }


  sort = () => {
    const ar = this.at.slice()
    ar.sort((a, b) => {
      if (a.description.toUpperCase() > b.description.toUpperCase()) {
        return 1
      }
      if (a.description.toUpperCase() < b.description.toUpperCase()) {
        return -1
      }
      return 0;
    })
    console.log(ar)
    this.setState({
      transactions: ar
    });
  }

  render() {
    return (
      // <p>ghhh</p>
      <>
        <Card border="primary" style={{ width: '80%', 'zIndex': '2000' }} className='  position-absolute centered start-50 translate-middle-x'>
          <Card.Body>
            <Card.Title>Transactions</Card.Title>
            <Card.Text>
              <p>total of {this.state.transactions.length} transactions:</p>
            </Card.Text>
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
                {this.state.transactions.map((transaction, index) => <Transaction className='lead h4' key={index} transaction={transaction} index={index} />)}
              </tbody>
            </Table>
            {/* </Card.Text > */}


            <Form onSubmit={this.handleSubmit}>

              <Form.Group className="mb-3" >
                <FloatingLabel
                  label="search transactions"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter transaction type"
                    name='keyWord'
                    onChange={this.handleChange}
                    value={this.state.keyWord}
                  />
                </FloatingLabel>
              </Form.Group>




              <Button variant="primary" type="submit" >
                search transactions
              </Button>
            </Form>
            <Button onClick={this.resetTransactions} variant="primary" type="submit" >
              Back to all transactions
            </Button>

            <Button onClick={this.sort} variant="primary" type="submit" >
              sort
            </Button>

            <Card.Footer className='text-end'>
              <Button href={`/${this.props.data.name}`} variant="primary">Back to Accounts</Button>
            </Card.Footer>

          </Card.Body>
        </Card>
      </>

    )


  }


}

const mapStateToProps = ({ auth: { currentUser: { data } } }) => {
  return { data }
}

export default connect(mapStateToProps)(AllTransactions)