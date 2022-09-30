import Circle from './components/Circle';
import Board from './components/Board';
import { useEffect, useState } from 'react';

export default function Scores() {
  const styleGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 50px)',
    gridTemplateRows: 'repeat(3, 50px)',
    gap: '5px',
    justifyContent: 'center',
  };

  const active = {
    backgroundColor: '#fc6471',
  };

  const data = [
    { id: 1, correct: true },
    { id: 2, correct: true },
    { id: 3, correct: true },
    { id: 4, correct: true },
    { id: 5, correct: true },
    { id: 6, correct: true },
    { id: 7, correct: true },
    { id: 8, correct: true },
    { id: 9, correct: true },
  ];

  const [rows, setRows] = useState(data)
  useEffect(()=>{

    // setRows(data)
    let total = 0;
    rows.map(item=>{
      if(item.correct)
        return total+=5;  
      return total;    
    })
    setScore(total)

  })

  const onClick = (item) => {
    console.log(rows)
    let newRows = rows.slice();
    let row = item;
    Object.assign(row,{ ...row, correct: !row.correct })
    // setRows([...rows,{ id: 9, correct: false }])
    setRows(newRows)
    
    let total = 0;
    rows.map(item=>{
      if(item.correct)
        return total+=5;  
      return total;    
    })
    setScore(total)
    // data[3].correct = false;
  }
  
  const [score, setScore]= useState(10)

  return (
    <>
      <Board score={score}></Board>
      <div style={styleGrid}>
        {rows.map((item) => (
          <Circle 
          onClick={()=>onClick(item)}
          active={item.correct} key={item.id} num={item.id} />
        ))}
      </div>
    </>
  );
}
