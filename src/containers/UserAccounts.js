import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class UserAccounts extends React.Component {

  render() {

    return (
      this.props.data.accounts.length > 0 ?
        <p></p>
        :
        <>
          <p>It seems like you don't have any regestered bank accounts yet</p>
          <NavLink exact to='/new_account'>click here to add new account</NavLink>
        </>
    )
  }

}

const mapStateToProps = ({ auth: { currentUser: { data } } }) => {
  console.log(data)
  return { data }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
//   };
// };

export default connect(mapStateToProps)(UserAccounts);