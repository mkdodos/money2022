import Accounts from '../components/Accounts'
import Cates from '../components/Cates'
import TicTacToe from '../components/TicTacToe'
import Balances from '../pages/Balances'

// import Balances from './Balances';

import Stocks from '../pages/Stocks'
import Books from '../components/Books'

import ContactList from '../demo/contacts/ContactList';
import ViewContact from '../demo/contacts/ViewContact';
import AddContact from '../demo/contacts/AddContact';

import Login from './Login'


import { useAuth } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute'

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';
import Dashboard from './Dashboard'
export default function Routes() {
  const {currentUser} = useAuth()
  return (
    <Switch>
      <Route path="/accounts">
        <Accounts />
      </Route>
      <Route path="/cates" component={Cates} />
      <Route path="/tictactoe" component={TicTacToe}/>
      {/* <Route path="/balances" component={Balances} /> */}
      <PrivateRoute path="/balances" exact component={Balances} />
      {/* <Route path="/balances">
      {currentUser?<Balances/>:<Redirect to="login" />}     
      </Route> */}





      <PrivateRoute path="/stocks" component={Stocks} />
      <Route path="/books" component={Books} />

      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dashboard} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />

      <Route path="/contacts" exact component={ContactList} />

      <Route path="/contacts/add" exact component={AddContact} />

      <Route path={"/contacts/view/:contactId"} exact component={ViewContact} />

      <Route path={"/contacts/edit/:contactId"} exact component={AddContact} />

        
     
    </Switch>
  );
}
