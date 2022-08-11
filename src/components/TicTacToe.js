import {useState} from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
export default function TicTacToe() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    console.log('dd')
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task)=>{
      return task!==taskName
    })
    console.log(newTodoList)
    setTodoList(newTodoList)
  }
  return (
    <>
    <Form>
      <Form.Group>
        <Form.Field>
          <label>名稱</label>
          <input onChange={handleChange}
            placeholder="First Name"
           
          />
        </Form.Field>
        
      </Form.Group>
      <Button onClick={addTask}>Submit</Button>
    </Form>
    <Segment>{
    todoList.map((task,i)=>{
      return (
        <div key={i}>
          <h1 >{task}</h1>
          <button  onClick={()=>deleteTask(task)}>X</button>
        </div>
        
      )
     
    })
    }</Segment>
    </>

  );
}
