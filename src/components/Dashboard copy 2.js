import React, { useEffect, useState, useReducer } from 'react';
// import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Statistic,
  Card,
  Grid,
  List,
  Table,
  Segment,
} from 'semantic-ui-react';
import { db } from '../utils/firebase';

import _ from 'lodash';

import numberFormat from '../utils/numberFormat';

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
];

export default function Dashboard() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };

      case 'CHANGE_SORT':
        if (state.column === action.column) {
          return {
            ...state,
            data: state.data.slice().reverse(),
            direction:
              state.direction === 'ascending' ? 'descending' : 'ascending',
          };
        }

        return {
          column: action.column,
          data: _.sortBy(state.data, [action.column]),
          direction: 'ascending',
        };

      // case 'CHANGE_SORT':
      //   return { column:action.column,
      //     data: tableData,
      //     direction:
      //     state.direction === 'ascending' ? 'descending' : 'ascending',
      //   };

      default:
        return state;
    }
  }

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
          return {
            id: doc.id,
            ...doc.data(),
            // 將金額字串轉為數字才能正確做排序
            expense: parseInt(doc.data().expense),
          };
        });

        let filterdData = data.filter((row) => row.expense > 0);
        // 金額排序
        // filterdData.sort((a, b) => {
        //   return b.expense - a.expense;
        // });

        filterdData = _.sortBy(filterdData, ['expense']);

        filterdData = filterdData.slice().reverse();
        // filterdData = filterdData.slice().reverse()
        setTotalData(filterdData);
        setTotalDataCopy(filterdData);
        // 合計
        let total = 0;
        filterdData.map((row) => {
          total += row.expense * 1;
        });
        setTotal(total);
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    column: null,
    data: tableData,
    direction: null,
  });

  const { column, data, direction } = state;

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
    arr.map((row) => {
      total += row.expense * 1;
    });

    return total;
  }

  return (
    <>
      <Segment textAlign='center'>
        {/* <Statistic color="pink">
          <Statistic.Value>1</Statistic.Value>
          <Statistic.Label>red</Statistic.Label>
        </Statistic>
        <Statistic color="blue">
          <Statistic.Value>3</Statistic.Value>
          <Statistic.Label>blue</Statistic.Label>
        </Statistic>

        <Statistic color="teal">
          <Statistic.Value>5</Statistic.Value>
          <Statistic.Label>teal</Statistic.Label>
        </Statistic>
        <Statistic color="green" inverted>
          <Statistic.Value>921</Statistic.Value>
          <Statistic.Label>green</Statistic.Label>
        </Statistic> */}

        
        <Statistic color="blue">
          <Statistic.Value>1</Statistic.Value>
          {/* <Statistic.Label>blue</Statistic.Label> */}
        </Statistic>

        <Statistic color="teal">
          <Statistic.Value>3</Statistic.Value>
          {/* <Statistic.Label>teal</Statistic.Label> */}
        </Statistic>
        <Statistic color="green" inverted>
          <Statistic.Value>5</Statistic.Value>
          {/* <Statistic.Label>green</Statistic.Label> */}
        </Statistic>
        <Statistic color="pink">
          <Statistic.Value>921</Statistic.Value>
          {/* <Statistic.Label>red</Statistic.Label> */}
        </Statistic>

      </Segment>

      <Table sortable celled fixed unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'age' ? direction : null}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'gender' ? direction : null}
              onClick={() =>
                dispatch({ type: 'CHANGE_SORT', column: 'gender' })
              }
            >
              Gender
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ age, gender, name }) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{age}</Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {state.column}
      {state.direction}
      <Button
        onClick={() => {
          // filterdData = filterdData.slice().reverse()
          setTotalData(totalData.slice().reverse());
          // dispatch({type:'increment'});
        }}
      >
        ABC
      </Button>

      <Button
        onClick={() => {
          // action.column
          dispatch({ type: 'decrement', column: 'age' });
        }}
      >
        ---
      </Button>
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
                <Card.Header
                  textAlign="center"
                  onClick={() => {
                    setTotalData(totalDataCopy);
                    setTotal(calTotal(totalDataCopy));
                  }}
                >
                  月支出
                </Card.Header>
              </Card.Content>
              {/* <Card.Content>{total}</Card.Content> */}
            </Card>
            <Table celled unstackable sortable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    sorted={direction}
                    onClick={() => {
                      dispatch({ type: 'CHANGE_SORT', column: 'date' });
                    }}
                  >
                    Date
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    onClick={() => {
                      dispatch({ type: 'CHANGE_SORT', column: 'title' });
                    }}
                  >
                    項目
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    onClick={() => {
                      setTotalData(totalData.slice().reverse());
                    }}
                  >
                    {total}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {totalData.map((row) => {
                  return (
                    <Table.Row key={row.id}>
                      <Table.Cell
                        onClick={() => {
                          let temp = totalData.filter(
                            (obj) => obj.date == row.date
                          );
                          //  console.log(temp)

                          setTotalData(temp);

                          let total = 0;
                          temp.map((row) => {
                            total += row.expense * 1;
                          });
                          setTotal(total);
                        }}
                      >
                        {row.date}
                      </Table.Cell>
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
