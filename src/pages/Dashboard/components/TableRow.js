import React from 'react';
import { Table, Header, Label } from 'semantic-ui-react';

export default function TableRow({ row }) {
  return (
    <Table.Row>
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
