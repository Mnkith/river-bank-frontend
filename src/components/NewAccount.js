import React from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/accounts";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class NewAccount extends React.Component {

  state = {
    account_type: "",
    number: "",
    exp: "",
    errors: { status: { message: "" } }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getRandomBalance = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) / 100
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const available_balance = this.getRandomBalance(300000, 700000)
    const { account_type, number, exp } = this.state;
    this.props
      .addAccount({ account_type, number, exp, available_balance, user_id: this.props.data.id })
      .then(() => this.props.history.push(`/${this.props.data.name}`))
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    return (
      <Container className="position-relative p-3">
        <Card body style={{ width: '33rem' }} className='position-absolute start-50 translate-middle-x'>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <h1 className='font-bold text-3xl mb-2'>Add new bank account</h1>
              <p className='h-8 text-red-400'><small>{this.state.errors.status?.message}</small></p>
              <Form.Group className="mb-3" >

                <Form.Select
                  className="me-sm-2" id="inlineFormCustomSelect"
                  onChange={this.handleChange}
                  name='account_type'
                >
                  <option >Select account type</option>
                  <option name='type' value="Checking">Checking</option>
                  <option name='type' value="Credit">Credit</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" >
                <FloatingLabel
                  label="Card number"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="number"
                    pattern="\d*"
                    placeholder="Enter card number"
                    name='number'
                    onChange={this.handleChange}
                    value={this.state.number}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" >
                <FloatingLabel
                  label="Expiration date"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="date"
                    placeholder="Enter expiration date"
                    name='exp'
                    id='exp'
                    onChange={this.handleChange}
                  />
                </FloatingLabel>
              </Form.Group>

              
              
              <Button variant="primary" type="submit" >
                Add account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = ( { auth:{currentUser: { data }} } ) => {
  // console.log(data)
  return { data }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps, { addAccount })(NewAccount)