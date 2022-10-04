import { useState } from 'react';
import '../styles/List.css';

export default function List({ year, setYear, rows, setSelectedRow,onYearClick }) {
  // const [active, setActive] = useState('');
  return (
    <div>
     
      <div className="wrapper">
        <table className='scores-table'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Basic</th>
              <th>Advance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr key={row.id}
                onClick={()=>onYearClick(row)}
                  // onClick={() => {
                  //   setYear(row.year);
                  //   setSelectedRow(row)
                    
                  // }}
                >
                  <td className={year == row.year ? 'active' : ''}>{row.year}</td>
                  <td>{row.basic}</td>
                  <td>{row.advance}</td>
                </tr>
              );
            })}

            {/* <tr
            onClick={() => {
              setYear(2018);
            }}
            >
              <td className={year == '2018' ? 'active' : ''}>2018</td>
              <td>120</td>
              <td>72</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
