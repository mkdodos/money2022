import React, { useEffect, useState } from 'react';
// import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Button, Statistic, Card, Grid, List, Table } from 'semantic-ui-react';
import { db } from '../utils/firebase';

import numberFormat from '../utils/numberFormat';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [bonus, setBonus] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalData, setTotalData] = useState([]);
  const [totalDataCopy, setTotalDataCopy] = useState([]);

  useEffect(() => {
    // db.collection('balances')
    //   .where('cate', '==', '股息')
    //   .get()
    //   .then((snapshot) => {
    //     let total = 0;
    //     snapshot.docs.map((doc) => {
    //       total += doc.data().income * 1;
    //     });
    //     setBonus(total);
    //   });

    db.collection('balances')
      .where('date', '>=', '2022-09')
      .where('user', '==', currentUser.email)
      .get()
      .then((snapshot) => {
        
        const data = snapshot.docs.map((doc) => {
          // if (doc.data().expense) total += doc.data().expense * 1;
          return { id: doc.id, ...doc.data() };
        });

        let filterdData = data.filter((row) => row.expense > 0) 
        setTotalData(filterdData);
        setTotalDataCopy(filterdData);
        let total = 0;
        filterdData.map(row=>{
          total += row.expense*1; 
        })
        setTotal(total);
      });
  }, []);

  // console.log(currentUser);
  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  function calTotal(arr) {

    let total = 0;
    arr.map(row=>{
      total += row.expense*1; 
    })

    return total;

    
  }

  return (
    <>
      {/* <pre>{JSON.stringify(currentUser)}</pre> */}
      {/* <div>Dashboard</div> */}

      {/* <Statistic color="green">
        <Statistic.Value>{numberFormat(bonus)}</Statistic.Value>
        <Statistic.Label>股息</Statistic.Label>
      </Statistic> */}

      <Grid columns={1}>
        <Grid.Row>
          {/* <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header textAlign="center">月支出</Card.Header>
              </Card.Content>
              <Card.Content>{total}</Card.Content>
            </Card>
          </Grid.Column> */}
          <Grid.Column>
          <Card fluid>
              <Card.Content>
                <Card.Header textAlign="center" onClick={()=>{
                  setTotalData(totalDataCopy)
                  setTotal(calTotal(totalDataCopy))
                }}>月支出</Card.Header>
              </Card.Content>
              {/* <Card.Content>{total}</Card.Content> */}
            </Card>
            <Table celled unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>{total}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {totalData.map((row) => {
                  return (
                    <Table.Row key={row.id}>                      
                      <Table.Cell onClick={()=>{
                       let temp =  totalData.filter(obj=>obj.date==row.date)
                      //  console.log(temp)

                       setTotalData(temp)

                       let total = 0;
                       temp.map(row=>{
                         total += row.expense*1; 
                       })
                       setTotal(total);


                      }}>{row.date}</Table.Cell>
                      <Table.Cell>{row.title}</Table.Cell>
                      <Table.Cell>{row.expense}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>

            {/* <List divided verticalAlign="middle">
              {totalData.map((row) => {
                return (
                  <List.Item key={row.id}>
                    <List.Content floated="right">{row.expense}</List.Content>
                    <List.Content>{row.title}</List.Content>
                  </List.Item>
                );
              })}
            </List> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
