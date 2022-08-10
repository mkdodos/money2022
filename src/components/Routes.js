import Accounts from '../components/Accounts'
import Cates from '../components/Cates'
import TicTacToe from '../components/TicTacToe'
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
        
     
    </Switch>
  );
}
