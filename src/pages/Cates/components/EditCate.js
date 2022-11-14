import { useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useState } from 'react';

import { db } from '../../../utils/firebase';

import { Form, Button } from 'semantic-ui-react';

export default function EditCate() {

  const { currentUser } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  const defalutItem = {
    name: '',
    prior: '',
  };

  const [item, setItem] = useState(defalutItem);

  useEffect(() => {
    // if(!id){
    //   console.log('abc');
    //   return;
    // }
    var docRef = db.collection('cates').doc(id);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItem(doc.data());
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (id) {
      // 將順序從文字轉成數字,排序看起來才會正常
      var docRef = db.collection('cates').doc(id);
      docRef.update({ ...item, prior: Number(item.prior) }).then(() => {
        history.push('/cates');
      });
    } else {
      db.collection('cates')
        .add({ ...item, prior: Number(item.prior),user:currentUser.email })
        .then(() => {
          history.push('/cates');
        });
    }
  };

  const handleDelete = async () => {
    // if(contactId)
    // await ContactService.DeleteContact(item.id)
    // history.push('/contacts')
  };

  return (
    <>
      <Form onSubmit={handleSave}>
        <Form.Field>
          <label>名稱</label>
          <input
            name="name"
            placeholder=""
            value={item.name}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>順序</label>
          <input
            type="number"
            name="prior"
            placeholder=""
            value={item.prior}
            onChange={handleChange}
          />
        </Form.Field>

        <Button type="submit" primary>
          Save
        </Button>
      </Form>
      {/* <div>{JSON.stringify(item)}</div> */}
    </>

    // <div>{id}</div>
  );
}
