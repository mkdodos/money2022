import AddColorForm from './AddColorForm';
import { useState } from 'react';
import { Table, Icon, Form } from 'semantic-ui-react';
export default function TicTacToe() {
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState("")
  // const data = []
  function logColor(title, amt) {
    const id =(rows.length>0)? rows[rows.length-1].id+1:1
    const newRows = [...rows, {title,id,completed:false}];
    // data.push(title)
    setRows(newRows);
    console.log(newRows);
  }
  function editRow(row) {
    setTitle(row.title)
    console.log(row);
  }

  function deleteRow(id) {
   const filterRows =  rows.filter((row)=>{
      return row.id !== id
    })
    setRows(filterRows)
    // console.log(id);
  }

  function updateRow(id) {
    const newRows = rows.map((row)=>{
      if(row.id===id){
        return {...row, completed:true}
      }else{
        return row
      }
    })
    console.log(newRows)
    setRows(newRows)
  }
  return (
    <>
    <div>{title}</div>
    <Form>
      <input defaultValue={title}/>
    </Form>
      <AddColorForm onNewColor={logColor} title1={title} />
      <Table unstackable>
        <Table.Body>
          {rows.map((row, i) => (
            <Table.Row onClick={() => editRow(row)} key={i}>
          
              <Table.Cell>
                {row.id}
              </Table.Cell>
              <Table.Cell>
                {row.title}
              </Table.Cell>
              <Table.Cell>
                {row.completed? <Icon color='green' name='checkmark' size='large' />:''}
              </Table.Cell>
              <Table.Cell onClick={() => deleteRow(row.id)}>
                X
              </Table.Cell>
              <Table.Cell onClick={() => updateRow(row.id)}>
                O
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* <ul>
        {rows.map((row, i) => (
          <li onClick={()=>editRow(row)} key={i}>{row}</li>
        ))}
      </ul> */}
    </>
  );
}
