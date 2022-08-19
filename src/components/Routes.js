import Accounts from '../components/Accounts'
import Cates from '../components/Cates'
import TicTacToe from '../components/TicTacToe'
import Balances from './Balances';
import Stocks from '../pages/Stocks'
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
        
     
    </Switch>
  );
}
