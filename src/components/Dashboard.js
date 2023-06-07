import { useEffect, useReducer, useState } from 'react';
import { Table, Segment, Statistic, Label } from 'semantic-ui-react';
import { db } from '../utils/firebase';
import { useAuth } from '../contexts/AuthContext';
import numberFormat from '../utils/numberFormat';
import _ from 'lodash';
import { MonthButton } from './MonthSelect';
import AccountDropdown from './AccountDropdown';

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const { currentUser } = useAuth();

  function reducer(state, action) {
    switch (action.type) {
      case 'sort':
        // 第二次按下同欄位
        if (state.column === action.column) {
          return {
            ...state,
            data: state.data.slice().reverse(),
            direction:
              state.direction === 'ascending' ? 'descending' : 'ascending',
          };
        }
        // 第一次按下某欄位
        return {
          ...state,
          column: action.column,
          data: _.sortBy(state.data, [action.column]),
          // dataCopy: state.data ,
          direction: 'ascending',
        };
      // 初始化資料,並留一份做為篩選用
      case 'setData':
        return { data: action.data, dataCopy: action.data };
      // 點選日期篩選資料
      case 'filterData':
        return { ...state, data: action.data };
      // 點選合計將資料回復原來
      case 'copyData':
        return { ...state, data: state.dataCopy };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    column: null,
    data: [],
    dataCopy: [],
    direction: null,
  });

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [account, setAccount] = useState('');

  const { column, data, direction, dataCopy } = state;
  useEffect(() => {
    let mm = '';
    month >= 10 ? (mm = month) : (mm = '0' + month);
    db.collection('balances')
      .where('date', '>=', `${year}-${mm}-01`)
      .where('date', '<=', `${year}-${mm}-31`)
      // .where('date', '>=', `2022-${mm}-01`)
      // .where('date', '<=', `2022-${mm}-31`)
      // .where('date', 'startAt', '2022-07')
      .where('user', '==', currentUser.email)
      .get()
      .then((snapshot) => {
        const rows = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            // 將金額字串轉為數字才能正確做排序
            expense: parseInt(doc.data().expense),
          };
        });

        // 篩選資料
        let filterdData = rows.filter(
          (row) => row.expense > 0 && row.type !== '轉帳'
        );

        if (account) {
          filterdData = filterdData.filter(
            (row) => row.account.name == account
          );
        }

        // 合計
        let temp = 0;
        filterdData.map((row) => {
          temp += row.expense * 1;
        });
        setTotal(temp);

        dispatch({ type: 'setData', data: filterdData, dataCopy: filterdData });
      });
  }, [month, year, account]);

  function calTotal(arr) {
    let total = 0;
    arr.map((row) => {
      total += row.expense * 1;
    });

    return total;
  }

  const handleYearClick = (e) => {
    switch (e.detail) {
      case 1:
        console.log(' click');
        setYear((prev) => {
          return prev - 1;
        });
        break;
      case 2:
        console.log('double click');
        break;
      case 3:
        console.log('triple click');
        break;
    }
  };

  function handleYearChange(e, { value }) {
    setYear(value);
    console.log(value);
  }

  return (
    <>
      <MonthButton
        text={`${month} 月`}
        year={year}
        onYearChange={handleYearChange}
        // setYear={setYear}
        onYearClick={handleYearClick}
        // onYearDoubleClick={() => setYear(new Date().getFullYear())}
        onPlusClick={() => {
          if (month == 12) setMonth(1);
          else setMonth(month + 1);
        }}
        // 中間按鈕按下切換回當月
        onClick={() => {
          setMonth(new Date().getMonth() + 1);
        }}
        onMinusClick={() => {
          if (month == 1) setMonth(12);
          else setMonth(month - 1);
        }}
      ></MonthButton>

      <Segment textAlign="center">
        <Statistic
          color="blue"
          onClick={() => {
            // console.log(data)
            console.log(dataCopy);
            dispatch({ type: 'copyData' });
            setTotal(calTotal(dataCopy));
          }}
        >
          <Statistic.Value>{numberFormat(total)}</Statistic.Value>
          {/* <Statistic.Label>blue</Statistic.Label> */}
        </Statistic>
      </Segment>

      <AccountDropdown onChange={(e, obj) => setAccount(obj.value)} />

      <Table celled unstackable sortable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              width={3}
              // 顯示向上向下箭頭(sorted='ascending' || 'descending')
              sorted={state.column === 'date' ? direction : null}
              onClick={() => {
                dispatch({ type: 'sort', column: 'date' });
              }}
            >
              日期
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === 'title' ? direction : null}
              onClick={() => {
                dispatch({ type: 'sort', column: 'title' });
              }}
            >
              項目
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={state.column === 'expense' ? direction : null}
              onClick={() => {
                dispatch({ type: 'sort', column: 'expense' });                
              }}
            >
              支出
            </Table.HeaderCell>
            {/* <Table.HeaderCell>帳戶</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.Cell
                  onClick={() => {
                    let temp = data.filter((obj) => obj.date == row.date);
                    dispatch({ type: 'filterData', data: temp });
                    setTotal(calTotal(temp));
                  }}
                >
                  {row.date.slice(5, 10)}
                </Table.Cell>
                <Table.Cell>
                  {row.title ? row.title : <Label>{row.cate}</Label>}
                </Table.Cell>
                <Table.Cell>{row.expense}</Table.Cell>
                {/* <Table.Cell>{row.account.name}</Table.Cell> */}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
