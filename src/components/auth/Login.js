import { connect } from "react-redux";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { loginUser } from "../../actions/auth";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
const React = require("react");
const B = require('react-bootstrap');
// const fs = require('fs');
// const data = fs.readFileSync('/readme.md'); // blocks here until file is read
// console.log(data);
class Login extends React.Component {
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
    const { email, password } = this.state;
    this.props
    .dispatchLoginUser({ email, password })
    .then(() => this.props.history.push(`/${this.props.data.name}`))
    .catch(() => this.setState({ error: true }))
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
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    // id='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
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
                    type="password"
                    placeholder="Password"
                    name='password'
                    // id='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </FloatingLabel>
              </Form.Group>
              
              <B.Button variant="primary" type="submit" >
                Log in
              </B.Button>
            </Form>
          </Card.Body>
        </Card>

        {/* </div> */}

      </Container>
    )
  }
}

const mapStateToProps = ( { auth: {currentUser: { data } } } ) => {
  // console.log(data)
  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);