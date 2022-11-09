import React from 'react';

import { Form } from 'semantic-ui-react';

import CateDropdown from '../../../components/CateDropdown';

export default function EditForm({ editedRow }) {
  return (
    <Form unstackable>
      <Form.Group>
        <CateDropdown label="類別" />
        <Form.Input width={8} value={editedRow?.title} label="項目" />
        <Form.Input width={8} value={editedRow?.income} label="收入金額" />
        <Form.Input width={8} value={editedRow?.expense} label="支出金額" />
      </Form.Group>
    </Form>
  );
}
