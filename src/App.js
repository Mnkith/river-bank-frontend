import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import withAuth from "./components/auth/withAuth";
import NewAccount from "./components/NewAccount";
import UserAccounts from './containers/UserAccounts'
import TransactionsList from './containers/TransactionsList'


function App() {
  // console.log(withAuth(ProtectedRoute))
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/protected_route'
            
            component={ withAuth(ProtectedRoute)}
            // component={ withAuth(UserAccounts)}
          />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/new_account' component={NewAccount} />
          
          <Route exact path='/:name' component={ withAuth(UserAccounts) } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;