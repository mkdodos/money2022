// 路由相關函數
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Trans from '../pages/Test';
// import Dashboard from '../pages/Dashboard';
import Protected from '../pages/Test/Protected';
import Login from '../pages/Test/Login';

import PrivateRoute from './PrivateRoute';

export default function index() {
  return (
    <Switch>
      {/* <Route path="/Dashboard" exact component={Dashboard} /> */}
      <Route path="/trans" exact component={Trans} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/protected">
        <Protected />
      </PrivateRoute>
    </Switch>
  );
}
