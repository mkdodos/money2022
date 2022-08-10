import { Form,Button } from "semantic-ui-react";
export default function EditForm(props) {
  return (
    <Form inline>
        <Form.Group>
        <Form.Field>
        <label>名稱</label>
        <input placeholder="First Name" value= {props.row.name}/>
      </Form.Field>
      <Form.Field>
        <label>餘額</label>
        <input placeholder="Last Name"  value= {props.row.balance}/>
      </Form.Field>
        </Form.Group>
     

      <Button type="submit">Submit</Button>
    </Form>
  );
}
