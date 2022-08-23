import Accounts from '../components/Accounts'
import Cates from '../components/Cates'
import TicTacToe from '../components/TicTacToe'
import Balances from './Balances';
import Stocks from '../pages/Stocks'
import Books from '../components/Books'

import ContactList from '../demo/contacts/ContactList';
import ViewContact from '../demo/contacts/ViewContact';
import AddContact from '../demo/contacts/AddContact';

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';
export default function Routes() {
  return (
    <Switch>
      <Route path="/accounts">
        <Accounts />
      </Route>
      <Route path="/cates" component={Cates} />
      <Route path="/tictactoe" component={TicTacToe}/>
      <Route path="/balances" component={Balances} />
      <Route path="/stocks" component={Stocks} />
      <Route path="/books" component={Books} />
      <Route path="/contacts" exact component={ContactList} />

      <Route path="/contacts/add" exact component={AddContact} />

      <Route path={"/contacts/view/:contactId"} exact component={ViewContact} />

      <Route path={"/contacts/edit/:contactId"} exact component={AddContact} />

        
     
    </Switch>
  );
}
