import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';
import { ReactComponent as LoadingIcon } from './images/loading.svg';

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  // min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 25px;
`;

const Location = styled.div`
  font-size: 28px;
  color: #212121;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #828282;
  margin-bottom: 30px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Temperature = styled.div`
  color: #757575;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

const DayCloudy = styled(DayCloudyIcon)`
  flex-basis: 30%;
`;

const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  color: #828282;

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    /* STEP 2：使用 rotate 動畫效果在 svg 圖示上 */
    animation: rotate infinite 1.5s linear;
    animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};
  }

  /* STEP 1：定義旋轉的動畫效果，並取名為 rotate */
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const AUTHORIZATION_KEY = 'CWB-9428EFB2-0CCE-4FA9-89FB-82EBBBB1415E';
const LOCATION_NAME = '臺北';
const LOCATION_NAME_FORECAST = '臺北市';

export default function Weather() {
  const [weatherElements, setWeatherElements] = useState({
    TEMP: '',
    WDSD: '',
    observationTime: new Date().toLocaleTimeString(),
  });
  const [loading, setLoading] = useState(false);

  const setCurrentWeather = async () => {
    setLoading(true);
    const data = await fetchData();
    setWeatherElements({
      ...data,
      observationTime: new Date().toLocaleTimeString(),
    });
    setLoading(false);
  };

  useEffect(() => {
    setCurrentWeather();
  }, []);

  // 將取得資料獨立一個函式,之後在有需要的地方再用 async , await 方式設定資料
  const fetchData = () => {
    return fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const elements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue;
            }
            return neededElements;
          },
          {}
        );

        return elements;
      });
  };

  return (
    <div>
      {/* <Container> */}
      <WeatherCard>
        <Location>台南市</Location>
        <Description>多雲時晴</Description>
        <CurrentWeather>
          <Temperature>
            {!loading && Math.round(weatherElements.TEMP)}{' '}
            {!loading && <Celsius>°C</Celsius>}
          </Temperature>
          <DayCloudy />
        </CurrentWeather>
        <AirFlow>
          <AirFlowIcon /> {weatherElements.WDSD} m/h
        </AirFlow>
        <Rain>
          <RainIcon /> 48%
        </Rain>
        <Refresh onClick={setCurrentWeather} isLoading={loading}>
          最後觀測時間：{weatherElements.observationTime}{' '}
          {loading ? <LoadingIcon /> : <RefreshIcon />}
        </Refresh>
      </WeatherCard>
      {/* </Container> */}
    </div>
  );
}
