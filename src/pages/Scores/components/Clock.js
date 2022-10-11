import React from 'react';
import { Message, Icon, Statistic } from 'semantic-ui-react';

export default function Clock() {
  // 取得開始日期和結束日期的毫秒數做相減
  // 將相差的毫秒數換算成天數
  // 將計算出的天數扣掉,再將餘數換算成小時
  // 將計算出的小時扣掉,再將餘數換算成分鐘
  const target = '2022-11-20';
  const from = new Date().getTime();
  const to = new Date(`${target} 00:00:00`).getTime();
  // 天
  let days = (to - from) / 60 / 60 / 1000 / 24;
  days = Math.floor(days);
  // 小時
  let left = to - from - days * 24 * 60 * 60 * 1000;
  let hours = left / 60 / 60 / 1000;
  hours = Math.floor(hours);
  // 分鐘
  left = left - hours * 60 * 60 * 1000;
  let mins = left / 60 / 1000;
  mins = Math.floor(mins);

  return (
    <div>
      <Message icon>
        <Message.Content>
          <Message.Header> <Icon name="circle notched" loading /> 距離 {target} </Message.Header>
         
          <Statistic.Group>
            <Statistic>
              <Statistic.Value>{days}</Statistic.Value>
              <Statistic.Label>天</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{hours}</Statistic.Value>
              <Statistic.Label>小時</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>{mins}</Statistic.Value>
              <Statistic.Label>分鐘</Statistic.Label>
            </Statistic>
          </Statistic.Group>

         
        </Message.Content>
      </Message>
      <br></br>
    </div>
  );
}
