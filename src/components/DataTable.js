import { Table } from "semantic-ui-react";

export default function DataTable(props) {
  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          {props.schema.map((obj, i) => (
            <Table.HeaderCell key={i}>
              {obj.text} 
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.rows.map((row, i) => (
          <Table.Row

            key={i}
            onClick={
              props.onRowClick
            }
          >
            {props.schema.map((obj, i) => {
              if (obj.type == "map") {
                return (
                  <Table.Cell key={i}>{row[obj.value]["name"]}</Table.Cell>
                );
              } else {
                return <Table.Cell key={i}>{row[obj.value]}</Table.Cell>;
              }
            })}

            {/* <Table.Cell>
              <div>{row.name}</div>
            </Table.Cell>
            <Table.Cell>
              <div>{row.balance}</div>
            </Table.Cell>
            <Table.Cell>
              <div>{row.user}</div>
            </Table.Cell> */}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
