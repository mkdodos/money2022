import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

export default function index() {
  const [rows,setRows]=useState([]);
  const url = 'http://localhost:8888/money2022mysql/select.php';
  useEffect(()=>{
    axios.get(url).then((res) => {
      setRows(res.data)
      console.log(res.data);
    });
  },[])
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>note_date</Table.HeaderCell>
            <Table.HeaderCell>title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map(row=>{
            return  (
              <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.note_date}</Table.Cell>
              <Table.Cell>{row.title}</Table.Cell>
            </Table.Row>
            )
          })}
         
        </Table.Body>
      </Table>
    </div>
  );
}
