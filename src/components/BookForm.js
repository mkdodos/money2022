import { useContext, useState } from 'react';
import { FirebaseBookContext } from '../contexts/FirebaseBookContext';
import { Form, Input, Button, Modal } from 'semantic-ui-react';
const NewBookForm = () => {
  const { editedBook, updateBook, saveBook, open, closeForm } =
    useContext(FirebaseBookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  

  const handleUpdate = () => {
    updateBook(editedBook, title);
    setTitle('');
    setAuthor('');
  };

  const handleSave = () => {
    saveBook(editedBook);
    setTitle('');
    setAuthor('');
  };

  const updateInput = (e) => {
    updateBook({
      ...editedBook,
      [e.target.name]: e.target.value,
    });  
  }
  return (
    <>
      <Modal open={open}
      closeIcon
      onClose={closeForm}
      >
        <Modal.Header>
          編輯
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <Input
                placeholder="book title"
                name="price"
                value={editedBook.price}
                // value={editedBook['title']}
                type="text"
                onChange={updateInput}
              />
            </Form.Field>
            <Form.Field>
              <label>Author</label>
              <Input
                placeholder="book author"
                name="author"
                value={editedBook.author}
                type="text"
                onChange={(e) => {
                  updateBook({
                    ...editedBook,
                    [e.target.name]: e.target.value,
                  });                 
                }}
              />
            </Form.Field>
          </Form>

          
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={handleSave}>Update</Button>
          </Modal.Actions>
      </Modal>
    </>
  );
};

export default NewBookForm;
