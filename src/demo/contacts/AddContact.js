import { Form, Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { ContactService } from './ContactService';
import { useHistory, useParams } from 'react-router-dom';
export default function AddContact() {
  const history = useHistory()
  const {contactId} = useParams()
  const defalutItem = {
    name: '',
    amt: '',
  };

  useEffect(async()=>{
    if(!contactId)
    return 
    const response = await ContactService.getContact(contactId)
    // console.log(contact)
    setItem(response.data)
  },[])

  // 單筆資料
  const [item, setItem] = useState(defalutItem);

  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if(contactId)
     await ContactService.UpdateContact(item)
    else
     await ContactService.AddContact(item)
    
    history.push('/contacts')
    console.log('save');
  };

  const handleDelete = async () => {
    if(contactId)
    await ContactService.DeleteContact(item.id)      
    history.push('/contacts')
   
  };

  return (
    <>
      {' '}
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
          <label>金額</label>
          <input
            name="amt"
            placeholder=""
            value={item.amt}
            onChange={handleChange}
          />
        </Form.Field>

        <Button type='submit'
          primary          
        >
          Save
        </Button>

       
      </Form>


      <Button 
         floated='right'
         onClick={handleDelete}         
        >
          Delete
        </Button>
    </>
  );
}
