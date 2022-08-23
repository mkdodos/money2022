
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


import ContactList from './demo/contacts/ContactList';
import CrudForm from './components/template/CrudForm';

export default function App() {
  // React.useEffect(()=>{
  //   db.collection('accounts').add({name:'abc'})
  // },[])
  return (
    <>
    <CrudForm/>
    {/* <ContactList/> */}
    <BrowserRouter>
      <Header></Header>

      {/* 路由 */}
     <Container>
     <Routes />
     </Container>
      
    </BrowserRouter>
    </>
  );
}
