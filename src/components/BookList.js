import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Table, Header, Button } from 'semantic-ui-react';

const BookList = () => {
  const { editBook, books, removeBook, openForm } = useContext(BookContext);
  const handleOpen = () => {
    console.log('open')
    openForm()
  }
  return (
    <>
      <Header>{books.length}</Header>
       <Button onClick={handleOpen}>ADD</Button>        
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>書名</Table.HeaderCell>
            <Table.HeaderCell>作者</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books.map((book) => {
            return (
              <Table.Row
                key={book.id}
               
              >
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell
                   onClick={() => {
                    removeBook(book.id);
                  }}
                >
                  Delete
                </Table.Cell>
                <Table.Cell
                  onClick={() => {
                    editBook(book);
                  }}
                >
                  Edit
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default BookList;
