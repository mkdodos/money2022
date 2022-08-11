import { useState } from "react";
import { Form, Button, Segment, Table } from "semantic-ui-react";
import {Task} from './Task'
export default function TicTacToe() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id:todoList.length>0?todoList[todoList.length-1].id+1:1,
      taskName:newTask
    }
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    console.log("dd");
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    console.log(newTodoList);
    setTodoList(newTodoList);
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Field>
            <label>名稱</label>
            <input onChange={handleChange} placeholder="First Name" />
          </Form.Field>
        </Form.Group>
        <Button onClick={addTask}>Submit</Button>
      </Form>
     
        <Table unstackable>
          <Table.Body>
            {todoList.map((task, i) => {
              return <Task key={i} id={task.id} taskName={task.taskName} deleteTask={deleteTask}/>
            })}
          </Table.Body>
        </Table>
     
    </>
  );
}
