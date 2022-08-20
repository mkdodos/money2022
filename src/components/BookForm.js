import { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { Form, Input, Button } from 'semantic-ui-react';
const NewBookForm = () => {
  const { addBook, editedBook, updateBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAdd = () => {
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  const handleUpdate = () => {
    updateBook(editedBook, title);
    setTitle('');
    setAuthor('');
  };
  return (
    <>
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder="book title"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <Input
            placeholder="book author"
            value={author}
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Form.Field>
        <Button onClick={handleAdd}>ADD</Button>
        <Button onClick={handleUpdate}>Update</Button>
      </Form>
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input
            placeholder="book title"
            value={editedBook.title}
            type="text"
            onChange={(e) => {
              updateBook(editedBook,e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <Input
            placeholder="book author"
            value={editedBook.author}
            type="text"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Form.Field>
        <Button onClick={handleAdd}>ADD</Button>
      </Form>
    </>
  );
};

export default NewBookForm;
