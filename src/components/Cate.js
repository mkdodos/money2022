import { Form, Button, Segment, Table } from "semantic-ui-react";
export const Cate = (props) => {
    return (
        <Table.Row>
        <Table.Cell>{props.id}</Table.Cell>
          <Table.Cell>{props.taskName}</Table.Cell>
          <Table.Cell>{props.user}</Table.Cell>
          <Table.Cell>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
          </Table.Cell>
        </Table.Row>
      );
}