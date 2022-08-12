import { Form, Button, Segment, Table, Divider } from 'semantic-ui-react';
import React from 'react';
export const Cate = (props) => {
  

  
  return (
    <>
      
      <Table.Row onClick={props.onClick}>
        {/* <Table.Cell>{props.row.id}</Table.Cell> */}
        {props.schema.map((obj,i)=>{
          return  <Table.Cell key={i}>{props.row[obj.value]}</Table.Cell> 
        })}
       
        {/* <Table.Cell>{props.row.prior}</Table.Cell>         */}
        {/* <Table.Cell>{props.row.user}</Table.Cell> */}
        <Table.Cell>
          <button onClick={() => props.deleteTask(props.row.id)}>X</button>
        </Table.Cell>
        <Table.Cell>
          <button onClick={() => props.editTask(props.row)}>Edit</button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};
