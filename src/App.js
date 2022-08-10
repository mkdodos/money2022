
import React from 'react';
import Header from './Header';
import Routes from './components/Routes';
import { Container } from 'semantic-ui-react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,

} from 'react-router-dom';

export default function App() {
  // React.useEffect(()=>{
  //   db.collection('accounts').add({name:'abc'})
  // },[])
  return (
    <BrowserRouter>
      <Header></Header>

      {/* 路由 */}
     <Container>
     <Routes />
     </Container>
      
    </BrowserRouter>
  );
}
