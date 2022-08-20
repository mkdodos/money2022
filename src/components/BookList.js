import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Table, Header } from 'semantic-ui-react';

const BookList = () => {
  const { editBook, books, removeBook } = useContext(BookContext);
  return (
    <>
      <Header>{books.length}</Header>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>書名</Table.HeaderCell>
            <Table.HeaderCell>作者</Table.HeaderCell>
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
