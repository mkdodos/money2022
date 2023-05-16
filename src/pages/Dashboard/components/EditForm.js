import React from 'react';
import { Form } from 'semantic-ui-react';
import AccountDropdown from '../../../components/AccountDropdown';
import CateDropdown from '../../../components/CateDropdown';

export default function EditForm({ editedRow, setEditedRow }) {
  const handleDropdownChange = (e, obj) => {
    setEditedRow({ ...editedRow, [obj.name]: obj.value });
  };

  // 帳戶下拉切換
  const handleAccountChange = (e, obj) => {
    // 更新編輯列中的 account 物件的 name 屬性
    setEditedRow({
      ...editedRow,
      account: { ...editedRow.account, name: obj.value },
    });
  };

  // 表單輸入時,設定 item 的值
  const handleChange = (e) => {
    setEditedRow({ ...editedRow, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form unstackable>
        <Form.Field>
          <label>日期</label>
          <input
            name="date"
            type="date"
            placeholder=""
            value={editedRow.date}
            onChange={handleChange}
          />
        </Form.Field>

        <AccountDropdown
          label="帳戶"
          name="account"
          account={editedRow?.account.name}
          onChange={handleAccountChange}
        />

        <CateDropdown
          name="cate"
          cate={editedRow?.cate}
          label="類別"
          onChange={handleDropdownChange}
        />
        <Form.Input name="title"   onChange={handleChange} value={editedRow?.title} label="項目" />
      </Form>
    </div>
  );
}
