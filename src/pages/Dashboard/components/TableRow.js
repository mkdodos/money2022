import React from 'react';
import { Table, Header, Label } from 'semantic-ui-react';

export default function TableRow({ row,onClick }) {
  return (
    // 點選時跳編輯視窗,將列的值傳過去
    <Table.Row onClick={onClick}>
      <Table.Cell>
        <Header as="h4">{row.title}</Header>
        <span>{row.date} </span>

        {row.cate && <Label>{row.cate}</Label>}
      </Table.Cell>
      <Table.Cell textAlign="right">
        {row.income ? (
          <Label color="teal" circular>
            存
          </Label>
        ) : (
          <Label color="orange" circular>
            提
          </Label>
        )}
        <br></br>$ {row.income ? row.income : row.expense + ''}
      </Table.Cell>
    </Table.Row>
  );
}
