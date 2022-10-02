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

  // for (let i = 1; i < 25; i++) {
  //   data.push({ id: i, correct: true });
  // }

  const [rows, setRows] = useState([]);

  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(false);

  const dbCol = db.collection('scores');

  useEffect(() => {
    for (let i = 1; i < 25; i++) {
      // db.collection('scores').add({ sn: i, correct: true, round:1 })
    }

    setLoading(true);

    dbCol
      .orderBy('sn')
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setRows(data);
        console.log(data);
        let total = 0;
        data.map((item) => {
          if (item.correct) return (total += 5);
          return total;
        });
        setScore(total);
        setLoading(false);
      });

    // setRows(data)
  }, []);

  const onClick = (item) => {
    console.log(item.id);
    dbCol.doc(item.id).update({ correct: !item.correct });
    let newRows = rows.slice();
    let row = item;
    Object.assign(row, { ...row, correct: !row.correct });

    setRows(newRows);

    let total = 0;
    rows.map((item) => {
      if (item.correct) return (total += 5);
      return total;
    });
    setScore(total);
  };

  return (
    <>
      <List></List>

      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <Board score={score}></Board>
      )}

      <div style={styleGrid}>
        {rows.map((item) => (
          <Circle
            onClick={() => onClick(item)}
            active={item.correct}
            key={item.id}
            num={item.sn}
          />
        ))}
      </div>
    </>
  );
}
