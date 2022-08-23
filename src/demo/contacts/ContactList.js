// React Contact Manager App
// https://www.youtube.com/watch?v=ZfqnUm7w6ig&t=5031
// 搭配 json server
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ContactService } from './ContactService';
import { Table, Button } from 'semantic-ui-react';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';

const ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
  });

  // useEffect(async () => {
  //   let response = await ContactService.getAllCates().then((snapshot) => {
  //     const data = snapshot.docs.map((doc) => {
  //       console.log(snapshot.size);
  //       return doc.data();
  //     });
  //     setState({ ...state, contacts: data });
  //   });
  // }, []);

  // axios 有不同寫法
  useEffect(async () => {
    setState({ ...state, loading: true });
    let response = await axios.get('http://192.168.0.12:9000/contacts');
    setState({ ...state, loading: false, contacts: response.data });
    //   setTimeout(function(){

    // },1000);
  }, []);

  // useEffect(() => {
  //   axios.get('http://192.168.0.12:9000/contacts').then((response) => {
  //     setState({ ...state, contacts: response.data });
  //   });
  // }, []);

  // useEffect(async () => {
  //   let response = await ContactService.getAllContacts();
  //   setState({ ...state, contacts: response.data });
  // }, []);

  const { contacts, loading } = state;
  return (
    <>
      {/* <pre>{JSON.stringify(state.contacts)}</pre> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Button><Link to={'/contacts/add'}>ADD</Link></Button>
          <Table unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>名稱</Table.HeaderCell>
                <Table.HeaderCell>金額</Table.HeaderCell>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>#</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {contacts.map((item) => {
                return (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.amt}</Table.Cell>

                    <Table.Cell                     
                    >
                       <Link to={`/contacts/edit/${item.id}`}>Edit</Link>
                    </Table.Cell>

                    <Table.Cell>
                      <Link to={`/contacts/view/${item.id}`}>View</Link>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </>
      )}
    </>
  );
};

export default ContactList;
