import React from 'react';

import { Divider, Label, Segment } from 'semantic-ui-react';

export default function Demo() {
  const numbers = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
  // const numbers2 = [0, 0, 0, 0, 'B', 0, 1, 1, 1, 1];
  return (
    <div>
      <Segment>
        有二個富翁,想比較誰的財富多,又不想讓對方知道自己的真實財產數字
      </Segment>
      假設 A和B的財富是介於1~10
      <br />
      A先準備10個箱子 假設 A 的財富是 7
      ,就在前面6個箱子填入0,之後箱子都填入1,如下所示
      <Divider />
      {numbers.map((num) => {
        return (
          <Label basic color="pink" size="large">
            {num}
          </Label>
        );
      })}
      <Divider />
      接下來由B選擇對應自己財富數字的箱子,假設是4,就會選到由左算來第4個箱子
      <Divider />
      {numbers.map((num, i) => {
        if (i == 3) {
          return (
            <Label color="pink" size="large">
              {num}
            </Label>
          );
        }
        return (
          <Label basic color="pink" size="large">
            {num}
          </Label>
        );
      })}
      <Divider />
      然後將其他箱子丟掉,只留下這個箱子
      <Label color="pink" size="large">
        ?
      </Label>
      <br/>
      
      <Divider />
      接下來由A將這個箱子打開,看到 0 的話,代表B財富小於A
      <br/>看到 1 的話,代表 B 財富大於等於 A
      <Segment>
      因為 A 不知道 B 選了那個箱子, B也不知道從那個箱子開始由 0 變 1,所以就可以完成零知識證明
      </Segment>
    </div>
  );
}
