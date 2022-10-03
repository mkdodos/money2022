import Circle from './components/Circle';
import Board from './components/Board';
import { useEffect, useState } from 'react';
import { db } from '../../utils/firebase';
import { Loader } from 'semantic-ui-react';
import List from './components/List';

export default function Scores() {
  const styleGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 50px)',
    gridTemplateRows: 'repeat(4, 50px)',
    gap: '5px',
    justifyContent: 'center',
  };

  const active = {
    backgroundColor: '#fc6471',
  };

  const [rows, setRows] = useState([]);
  const [rowDetails, setRowDetails] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [seletedRow, setSelectedRow] = useState({});
  const [year, setYear] = useState(0);

  // 分數
  const dbColScores = db.collection('scores');
  // 分數明細
  const dbColScoreDetails = db.collection('scoreDetails');

  // 欄位
  const schemaScores = {
    // 年份 number
    year: 2017,
    // 基礎題分數 number
    basic: 120,
    // 進階題分數 number
    advance: 80,
  };

  const schemaScoreDetails = {
    // 年份 number
    year: 2018,
    // 題型 string ['basic','advance']
    type: 'basic',
    // 題號 number
    sn: 1,
    // 對錯 boolean
    correct: true,
  };

  useEffect(() => {
    for (let i = 1; i < 25; i++) {
      //
      // dbColScoreDetails.add({ ...schemaScoreDetails, sn: i });
    }

    // setLoading(true);

    // dbColScores
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.docs.map((doc) => {
    //       dbColScores.doc(doc.id).delete();
    //     });
    //   });

    // 設定分數資料
    dbColScores
      .orderBy('year')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc, index) => {
          return { ...doc.data(), id: doc.id };
        });

        setRows(data);
      });
  }, []);

  // 年有變化時更新明細資料
  useEffect(() => {
    // 設定分數明細資料
    dbColScoreDetails
      .orderBy('sn')
      .where('year', '==', year)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        // 計算分數
        calTotal(data);
        setRowDetails(data);
      });
  }, [year]);

  // 分數有變化時更新主表的分數
  useEffect(() => {
    const index = rows.indexOf(seletedRow);
    if (index !== -1) {
      dbColScores
        .doc(seletedRow.id)
        .update({ basic: score })
        .then(() => {
          let newScores = rows.slice();
          Object.assign(newScores[index], { ...seletedRow, basic: score });
          setRows(newScores);
        });
    }
  }, [score]);

  // 計算分數
  const calTotal = (data) => {
    let total = 0;
    data.map((item) => {
      if (item.correct) return (total += 5);
      return total;
    });
    setScore(total);
  };

  // 點選明細球(計算分數, 更新該筆的對錯)
  const onClick = (item) => {
    dbColScoreDetails
      .doc(item.id)
      .update({ correct: !item.correct })
      .then(() => {
        let newRows = rowDetails.slice();
        let row = item;
        Object.assign(row, { ...row, correct: !row.correct });
        setRowDetails(newRows);
        calTotal(rowDetails);
      });
  };

  // 點選年
  const onYearClick = (row) => {
    setYear(row.year);
    setSelectedRow(row);
  };

  return (
    <>
      {/* {typeof year} */}
      <List
        year={year}
        setYear={setYear}
        rows={rows}
        setSelectedRow={setSelectedRow}
        onYearClick={onYearClick}
      ></List>

      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <>
          <Board score={score}></Board>
          <div style={styleGrid}>
            {rowDetails.map((item) => (
              <Circle
                onClick={() => onClick(item)}
                active={item.correct}
                key={item.id}
                num={item.sn}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
