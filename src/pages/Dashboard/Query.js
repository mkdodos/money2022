import { useAuth } from '../../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase';
import { Table, Button, Form, Input } from 'semantic-ui-react';

export default function Query() {
  const { currentUser } = useAuth();
  const [rows, setRows] = useState([]);
  const [rowsCopy, setRowsCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    db.collection('balances')
      .limit(100)
      .where('user', '==', currentUser.email)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(data);
        setRows(data);
        setRowsCopy(data);
      });
  }, []);

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Field inline>
            <Input value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }} />
            <Button color="olive"
              onClick={() => {
                // let copyRows = rows.slice();
                // copyRows = copyRows.filter((row) => row.title.includes('新'));
                setRows(rowsCopy.filter((row) => row.title.includes(searchText)));
              }}
            >
              Query
            </Button>
            <Button
              onClick={() => {
                setRows(rowsCopy);
              }}
            >
              Clear
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>

      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>date</Table.HeaderCell>
            <Table.HeaderCell>account</Table.HeaderCell>
            <Table.HeaderCell>cate</Table.HeaderCell>
            <Table.HeaderCell>title</Table.HeaderCell>
            <Table.HeaderCell>expense</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell>{row.date}</Table.Cell>
                <Table.Cell>{row.account?.name}</Table.Cell>
                <Table.Cell>{row.cate}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell>{row.expense}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
