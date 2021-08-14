import React from "react";
import { connect } from "react-redux";
import { addAccount } from "../actions/accounts";
import { NavLink } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


class NewAccount extends React.Component {

  state = {
    type: "",
    number: "",
    exp: "",
    errors: { status: { message: "" } }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state, event.target.name, event.target.value));
  };

  // handleSelect = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const { type, number, exp } = this.state;
    this.props
      .addAccount({ type, number, exp, user_id: this.props.data.id })
      // .then(() => this.props.history.push(`/${this.props.data.name}`))
      // .catch((errors) => this.setState({ errors }));
  };

  render() {
    return (
      <Container className="position-relative p-3">




        {/* <div style={{width: '50px', height: '50px', backgroundColor: 'black'}} className="position-absolute top-50 start-50 translate-middle">
      </div> */}
        <Card body style={{ width: '33rem' }} className='position-absolute start-50 translate-middle-x'>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <h1 className='font-bold text-3xl mb-2'>Add new bank account</h1>
              {/* <p className='h-8 text-red-400'>{this.state.errors.status.message}</p> */}

              <Form.Group className="mb-3" controlId="formBasicName">

                <Form.Select
                  className="me-sm-2" id="inlineFormCustomSelect"
                  onChange={this.handleChange}
                  name='type'
                  // value={this.state.type}
                >
                  <option >Select account type</option>
                  <option name='type' value="Checking">Checking</option>
                  <option name='type' value="Credit">Credit</option>
                  {/* <option name='type' value="3">Three</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Card number"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="input"
                    placeholder="Enter card number"
                    name='number'
                    // id='email'
                    onChange={this.handleChange}
                    value={this.state.number}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Expiration date"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="date"
                    placeholder="Enter expiration date"
                    name='exp'
                    id='exp'
                    onChange={this.handleChange}
                    // value={this.state.number}
                  />
                </FloatingLabel>
              </Form.Group>

              
              
              <Button variant="primary" type="submit" >
                Add account
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* </div> */}

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

export default connect(null, { addAccount })(NewAccount)