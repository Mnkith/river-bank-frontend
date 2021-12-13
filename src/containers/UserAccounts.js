import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import AccountsList from './AccountsList'

// import { checkAuth } from "../actions/auth";


class UserAccounts extends React.Component {
  // componentDidMount() {
  //   this.props.dispatchCheckAuth();
  // }


  render() {
    return (
      <>
        <p>Hello {this.props.data.name}</p>
        {this.props.data.accounts.length > 0 ?
          <>
            <AccountsList accounts={this.props.data.accounts} userName={this.props.data.name} />
            <p>
              <NavLink exact to='/new_account'>click here to add new account</NavLink><hr></hr>
              <NavLink exact to='/all_transactions' >show all transactions</NavLink>
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

const mapStateToProps = ({ auth: { currentUser: { data } } }) => {
  return { data }
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