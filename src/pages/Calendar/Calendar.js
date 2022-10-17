import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';

export default function Calendar() {
  const [activeDate, setActiveDate] = useState();
  return (
    <div>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            {Array.from({ length: 7 }, (v, i) => (
              <Table.HeaderCell key={i}>
                星期
                {i < 6 ? i + 1 : '日'}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Array.from({ length: 5 }, (v, i) => (
            <Table.Row key={i}>
              {Array.from({ length: 7 }, (v, j) => (
               
               
               <Table.Cell key={j} onClick={()=>setActiveDate(i*7+j+1)} active={activeDate===i*7+j+1} >
                  
                  {i*7+j+1<32?i*7+j+1:''}
                </Table.Cell>
              ))}

              {/* <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
}
