import React from 'react';
import { Segment, Table, Label, Header } from 'semantic-ui-react';
export default function DataList({ rows,onDataListRowClick }) {
  return (
    <div>
      {rows.map((row) => {
        return (
          
           

            <Table unstackable key={row.id}>
              {row.flag && (
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center" colSpan="2">
                      {row.s1}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              )}

              <Table.Body>
                <Table.Row onClick={()=>onDataListRowClick(row)}>
                  <Table.Cell>
                    <Header as="h4">{row.title}</Header>
                    <span>{row.date}</span>

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
              </Table.Body>
            </Table>
         
        );
      })}
    </div>
  );
}
