import { useEffect, useState } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

export default function EditForm({
  rows,
  setRows,
  row,
  setRow,
  saveRow,
  loading,
}) {
  useEffect(() => {}, []);

  // 輸入資料時同時設定 row
  const inputChange = (e) => {
    setRow({ ...row, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>期數</label>
          <input
            type="number"
            value={row.section}
            onChange={inputChange}
            name="section"
          />
        </Form.Field>
        <Form.Field>
          <label>日期</label>
          <input
            type="date"
            value={row.consumeDate}
            placeholder=""
            onChange={inputChange}
            name="consumeDate"
          />
        </Form.Field>
        <Form.Field>
          <label>項目</label>
          <input
            placeholder=""
            value={row.note}
            onChange={inputChange}
            name="note"
          />
        </Form.Field>

        <Form.Field>
          <label>金額</label>
          <input
            type="number"
            placeholder=""
            value={row.amt}
            onChange={inputChange}
            name="amt"
          />
        </Form.Field>

        <Button primary fluid loading={loading} type="submit" onClick={saveRow}>
          儲存
        </Button>
      </Form>
    </div>
  );
}
