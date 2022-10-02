import React from 'react';
import '../styles/List.css';

export default function List() {
  return (
    <div>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>Round</th>
              <th>Basic</th>
              <th>Advance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>115</td>
              <td>70</td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>120</td>
              <td>72</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
