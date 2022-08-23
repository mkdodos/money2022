import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function FakeData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post('http://localhost:9000/money',{name:'test'})
      .then((res) => {
        console.log(res.data);
        // setData(res.data);
      });
    // axios
    //   // .get('http://localhost:8080/vue2salary/pdo/employee/read.php')
    //   .get('http://localhost:8080/pdo/employee/read.php')
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data);
    //   });

    // fetch('http://localhost:8888/vue2salary/pdo/employee/read.php')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }, []);

  return (
    <ul>
      {data.map((obj, i) => {
        return <li key={i}>{obj.emp_name}</li>;
      })}
    </ul>
  );
}
