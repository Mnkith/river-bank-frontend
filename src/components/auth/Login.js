import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    errors: false
  };
  handleChange = (event) => {
    // console.log(this.props)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {

    event.preventDefault();
    const { name, email, password } = this.state;
    this.props
      .dispatchSignupUser({ name, email, password })
      .then(() => this.props.history.push(`/${this.props.data.name}`))
      .catch((errors) => this.setState({ errors, validated: true }))
  }

  render() {
    return (
      <Container className="position-relative p-3">
        <Card body style={{ width: '33rem' }} className='position-absolute start-50 translate-middle-x'>
          <Card.Body>
            <Form noValidate onSubmit={this.handleSubmit}>
            <h1 className='font-bold text-3xl'>Log In</h1>
        <p className="h-8 text-red-400">{this.state.error && "Invalid email or password"}</p>

              

              <Form.Group className="mb-3" >
                <FloatingLabel
                  // controlId="floatingInput"
                  label="Email address"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    isInvalid={!!this.state.errors.status.email?.[0]}

                    type="email"
                    placeholder="Enter email"
                    name='email'
                    // id='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    <small>Email {this.state.errors.status.email?.[0]}</small>
                  </Form.Control.Feedback>
                </FloatingLabel>
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" >
                <FloatingLabel
                  label="Password"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    isInvalid={!!this.state.errors.status.password?.[0]}
                    type="password"
                    placeholder="Password"
                    name='password'
                    // id='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    <small>Password {this.state.errors.status.password?.[0]}</small>
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              
              <Button variant="primary" type="submit" >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* </div> */}

      </Container>
    )
  }
}

const mapStateToProps = (s) => {
  console.log(s)

  return { data: s.auth.currentUser.data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);