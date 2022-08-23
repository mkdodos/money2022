// React Contact Manager App
// https://www.youtube.com/watch?v=ZfqnUm7w6ig&t=5031
// 搭配 json server
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ContactService } from './ContactService';
const ContactList = () => {
  let [state, setState] = useState({
    contacts: [],
  });

  useEffect(async () => {
    let response = await ContactService.getAllCates().then(snapshot=>{
      const data = snapshot.docs.map(doc=>{
        console.log(snapshot.size)
        return doc.data()
      })
      setState({ ...state, contacts: data });
    });
    
  }, []);

  // axios 有不同寫法
  // useEffect(async () => {
  //   let response = await axios.get('http://192.168.0.12:9000/contacts');
  //   setState({ ...state, contacts: response.data });
  // }, []);

  // useEffect(() => {
  //   axios.get('http://192.168.0.12:9000/contacts').then((response) => {
  //     setState({ ...state, contacts: response.data });
  //   });
  // }, []);

  // useEffect(async () => {
  //   let response = await ContactService.getAllContacts();
  //   setState({ ...state, contacts: response.data });
  // }, []);

  return <pre>{JSON.stringify(state.contacts)}</pre>;
};

export default ContactList;
