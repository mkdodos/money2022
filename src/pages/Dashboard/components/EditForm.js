import React from 'react';
import { Form } from 'semantic-ui-react';
import AccountDropdown from '../../../components/AccountDropdown';
import CateDropdown from '../../../components/CateDropdown';

export default function EditForm({ editedRow }) {
  return (
    <div>
      <Form unstackable>
        <AccountDropdown
          label="帳戶"
          name="account"
          account={editedRow?.account.name}
          // onChange={handleDropdownChange}
        />

        <CateDropdown
          name="cate"
          cate={editedRow?.cate}
          label="類別"
          // onChange={handleDropdownChange}
        />
        <Form.Input name="title" value={editedRow?.title} label="項目" />
      </Form>
    </div>
  );
}
