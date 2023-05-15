import React from 'react';

import { Form, FormInput, Input, Label } from 'semantic-ui-react';

import CateDropdown from '../../../components/CateDropdown';
import AccountDropdown from '../../../components/AccountDropdown';

export default function EditForm({ editedRow, setEditedRow }) {
  const handleInputChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e, obj) => {
    // console.log(obj.value)
    setEditedRow({ ...editedRow, [obj.name]: obj.value });
  };

  return (
    <Form unstackable>
      <CateDropdown
        name="cate"
        cate={editedRow?.cate}
        label="類別"
        onChange={handleDropdownChange}
      />
      <AccountDropdown
        label="帳戶"
        name="account"
        account={editedRow?.account.name}
        onChange={handleDropdownChange}
      />

      <Form.Input
        name="title"
        onChange={handleInputChange}
        value={editedRow?.title}
        label="項目"
      />

      <Form.Group>
        <Form.Input
          name="income"
          onChange={handleInputChange}
          value={editedRow?.income}
          width={8}
          label="收入金額"
        />
        <Form.Input
          name="expense"
          onChange={handleInputChange}
          value={editedRow?.expense}
          width={8}
          label="支出金額"
        />
      </Form.Group>
    </Form>
  );
}
