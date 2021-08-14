import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {status: {message: ""}}
  };

  handleChange = (event) => {
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
      .catch((errors) => this.setState({ errors }));
  };

  componentDidMount(){
    // document.body.style.backgroundImage = "url(/signup-image.jpg)"
  }

  render() {
    return (
      <Container className="position-relative p-3">




        {/* <div style={{width: '50px', height: '50px', backgroundColor: 'black'}} className="position-absolute top-50 start-50 translate-middle">
      </div> */}
        <Card body style={{ width: '33rem' }} className='position-absolute start-50 translate-middle-x'>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
            <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
        <p className='h-8 text-red-400'>{this.state.errors.status.message}</p>

        <Form.Group className="mb-3" controlId="formBasicName">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your name"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    name='name'
                    // id='email'
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </FloatingLabel>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    // id='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </FloatingLabel>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3 text-muted"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name='password'
                    // id='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </FloatingLabel>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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

const mapStateToProps = ( { auth:{currentUser: { data }} } ) => {
  // console.log(data)
  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);