import { ContactService } from '../../services/ContactService';
import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: '',
  });
  useEffect( () => {
    setState({ ...state, loading: false });
    const response =  ContactService.getAllContacts();
    setState({ ...state, loading: false, contacts: response });
    console.log(response);
  }, []);

  const { contacts } = state;
  return <pre>{JSON.stringify(contacts)}</pre>;
};

export default ContactList;
