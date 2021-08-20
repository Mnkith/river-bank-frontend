import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { checkAuth } from "../actions/auth";


class UserAccounts extends React.Component {
  // componentDidMount() {
  //   this.props.dispatchCheckAuth();
  // }
  
  
  render() {
    
    // this.props.dispatchCheckAuth();
    // console.log(this.props.auth.currentUser.data.accounts.length)
    return (
      <>
      <p>hello {this.props.auth.currentUser.data.name}</p>
      <p>accounts: {this.props.auth.currentUser.data.accounts.length}</p>
      {this.props.auth.currentUser.data.accounts.length > 0 ?
      <>
      {this.props.auth.currentUser.data.accounts[1].exp}
      <p>
      <NavLink exact to='/new_account'>click here to add new account</NavLink>
      </p>
      </>
        :
        <>
          <p>It seems like you don't have any regestered bank accounts yet</p>
          <NavLink exact to='/new_account'>click here to add new account</NavLink>
        </>
  }
        </>
        

    )
  }

}

const mapStateToProps = ({ auth }) => {
  // console.log(auth)
  return { auth }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchCheckAuth: () => dispatch(checkAuth())
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
//   };
// };

export default connect(mapStateToProps)(UserAccounts);