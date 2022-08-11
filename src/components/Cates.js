import { db, db_dada } from "../utils/firebase";
import DataTable from "./DataTable";
import DataRow from "./DataRow";
import { Button, Table } from "semantic-ui-react";
// import {db as dada} from '../utils/firebase-dada'
import React from "react";
import { Cate } from "./Cate";

export default function Cates() {
  const [rows, setRows] = React.useState([]);
  const [rows2, setRows2] = React.useState([]);
  const schema = [
    { text: "名稱", value: "name", type: "string" },
    { text: "順序", value: "prior", type: "number" },
    // {text:'建立',value:'createdAt',type:'number'},
  ];
  React.useEffect(() => {
    db.collection("cates")
      .get()
      .then((snapshot) => {
        setRows(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  const deleteTask = (id) => {
    const newTodoList = rows.filter((task) => {
      return task.id !== id;
    });

    setRows(newTodoList);
  };

  return (
    <>
      <Button
        onClick={() => {
          const rowsCopy = rows.slice()
          setRows2(rowsCopy)
          console.log(rows)
          // const data = rows2.filter((row) => row.user === "mkdodos@gmail.com");
          // setRows(data);
        }}
      >
        M
      </Button>
      <Button
        onClick={() => {
          const data = rows.filter((row) => row.user === "dada@gmail.com");
          setRows(data);
        }}
      >
        D
      </Button>
      <Table unstackable>
        <Table.Body>
          {rows.map((task, i) => {
            return (
              <Cate
                key={i}
                id={task.id}
                taskName={task.name}
                user={task.user}
                deleteTask={deleteTask}
              />
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
