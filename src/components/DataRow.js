import { Form, Button, Table } from "semantic-ui-react";
export default function DataRow(props) {
  return (
    <>
      <Table.Row onClick={props.onClick}>
        <Table.Cell> {props.value}</Table.Cell>
        <Table.Cell> {props.row.name}</Table.Cell>
        <Table.Cell> {props.row.balance}</Table.Cell>
      </Table.Row>
    </>
  );
}
