import React from 'react';
import { Label, Divider,Icon } from 'semantic-ui-react';
export default function Answer() {
  const basic = [
    1, 3, 3, 4, 2, 3, 4, 3, 1, 1, 4, 3, 3, 4, 3, 1, 4, 3, 2, 2, 3, 2, 3, 2,
  ];
  const adv = ['192', '3公尺8公分','8','1','不能','26','XOX','8:30','610','396'];
  return (
    <div>
      {basic.map((row, index) => {
        return (
          <>
            <Label circular basic color="teal" size='large'>
              {row}
            </Label >
            {index % 5 == 4 && index % 10 != 9 &&
              <Icon size='tiny' name='circle' color='teal'/>}
            {/* {index % 5 == 4 && index % 10 != 9 &&  
            '-'
            } */}
            {index % 10 == 9 && <Divider />}
           
           
          </>
        );
      })}
      <Divider />

      {adv.map((row, index) => {
        return (
          <>
            <Label  basic color="pink" size='large'>
              {row}
            </Label>
            {index % 5 == 4 && <Divider />}
          </>
        );
      })}

      <Divider />
    </div>
  );
}
