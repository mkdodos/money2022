import React from 'react';
import Header from './Header';
import Routes from './components/Routes';
import { Container } from 'semantic-ui-react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import ContactList from './demo/contacts/ContactList';
import CrudForm from './components/template/CrudForm';

import Spinner from './components/Spinner';

import Login from './pages/Login';

export default function App() {
  // React.useEffect(()=>{
  //   db.collection('accounts').add({name:'abc'})
  // },[])
  return (
    <>
      {/* <Login/> */}
      {/* <Spinner/> */}
      {/* <CrudForm/> */}

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          {/* 路由 */}
          <Container>
            {/* <ContactList/> */}

            <Routes />
          </Container>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
