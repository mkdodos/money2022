import Accounts from './Accounts'
// import Cates from '../components/Cates'
import Cates from '../pages/Cates'
import TicTacToe from './TicTacToe'
import Balances from '../pages/Balances'
import EditCate from '../pages/Cates/components/EditCate'
// import Balances from './Balances';

import Stocks from '../pages/Stocks'
import Books from './Books'

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

import EmpBasic from './EmpBasic'
export default function Routes() {
  const {currentUser} = useAuth()
  return (
    <Switch>
      <Route path="/accounts">
        <Accounts />
      </Route>
      <Route path="/cates" exact component={Cates} />

      <Route path="/emp-basic" exact component={EmpBasic} />


      <Route path={"/cates/edit/:id"} exact component={EditCate} />



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
