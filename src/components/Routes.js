import Accounts from './Accounts';
// import Cates from '../components/Cates'
import Cates from '../pages/Cates';
import TicTacToe from './TicTacToe';
import Balances from '../pages/Balances';
import EditCate from '../pages/Cates/components/EditCate';
// import Balances from './Balances';

import Stocks from '../pages/Stocks';
import Trans from '../pages/Trans';

import Books from './Books';

import ContactList from '../demo/contacts/ContactList';
import ViewContact from '../demo/contacts/ViewContact';
import AddContact from '../demo/contacts/AddContact';

import Login from './Login';

import { useAuth } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Food from '../pages/Food';
import Balances2 from '../pages/Balances2/Balances2';

import EmpBasic from './EmpBasic';

import Scores from '../pages/Scores/Scores';
import School from '../pages/School';

import Mortgages from '../pages/Mortgages/Mortgages';

import Weather from '../pages/Weather/Weather';
import Calendar from '../pages/Calendar/Calendar';

import Query from '../pages/Dashboard/Query';

import EditForm from '../pages/Food/component/EditForm';

import Cart from '../pages/Food/component/Cart';
// 記事類別
import CatesNote from '../pages/CatesNote';
import EditCatesNote from '../pages/CatesNote/components/EditCate';
// import Dashboard from './Dashboard'

import Demo from './Demo';
export default function Routes() {
  const { currentUser } = useAuth();
  return (
    <Switch>
      <Route path="/trans" exact component={Trans} />
      <Route path="/demo" exact component={Demo} />
      <Route path="/prod/:id" exact component={EditForm} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/food" exact component={Food} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/query" exact component={Query} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/weather" exact component={Weather} />
      <Route path="/mortgages" exact component={Mortgages} />
      <Route path="/scores" exact component={Scores} />
      <Route path="/school" exact component={School} />
      <Route path="/balances2" exact component={Balances2} />
      <Route path="/accounts">
        <Accounts />
      </Route>

      {/* 記事類別 */}
      <Route path="/cates-note" exact component={CatesNote} />
      <Route path={'/cates-note/insert'} exact component={EditCatesNote} />
      <Route path={'/cates-note/edit/:id'} exact component={EditCatesNote} />

      <Route path="/emp-basic" exact component={EmpBasic} />

      {/* 類別 */}
      <Route path="/cates" exact component={Cates} />
      <Route path={'/cates/edit/:id'} exact component={EditCate} />
      <Route path={'/cates/insert'} exact component={EditCate} />

      <Route path="/tictactoe" component={TicTacToe} />
      {/* <Route path="/balances" component={Balances} /> */}
      <PrivateRoute path="/balances" exact component={Balances} />
      {/* <Route path="/balances">
      {currentUser?<Balances/>:<Redirect to="login" />}     
      </Route> */}

      <PrivateRoute path="/stocks" component={Stocks} />
      <Route path="/books" component={Books} />

      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Balances} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />

      <Route path="/contacts" exact component={ContactList} />

      <Route path="/contacts/add" exact component={AddContact} />

      <Route path={'/contacts/view/:contactId'} exact component={ViewContact} />

      <Route path={'/contacts/edit/:contactId'} exact component={AddContact} />
    </Switch>
  );
}
