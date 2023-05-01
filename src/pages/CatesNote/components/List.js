import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function List({ rows, schema }) {
  return (
    <>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            {/* 標題列 */}
            {schema.map((header, i) => {
              return <Table.HeaderCell key={i}>{header.text}</Table.HeaderCell>;
            })}
            <Table.HeaderCell>#</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* 資料列 */}
          {rows.map((row, i) => {
            return (
              <tr key={i}>
                {/* 資料欄 */}
                {schema.map((obj, i) => {
                  return <td key={i}>{row[obj.name]}</td>;
                })}

                <td>
                <Link to={`/cates-note/edit/${row.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
