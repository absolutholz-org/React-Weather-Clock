import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import WeatherButton from './components/WeatherButton';

interface IForecastWeather {
  id: number;
}

export interface IForecast {
  dt: number;
  temp: number;
  weather: IForecastWeather[];
}

const ClockFace = styled.div`
  aspect-ratio: 1 / 1;
  background-color: hsla(0, 0%, 100%);
  /* background-image: repeating-conic-gradient(
    from 30deg at 50% 50%,
    hsla(0, 0%, 100%, 0.25) 0deg 15deg,
    hsla(0, 0%, 0%, 0.25) 15deg 30deg
  ); */
  border: 0.25rem solid;
  border-radius: 50%;
  margin: auto;
  max-width: 500px;
  position: relative;
  width: 100%;
`;

const ClockFacePosition = styled(WeatherButton)`
  position: absolute;
`;

const ClockFacePosition1 = styled(ClockFacePosition)`
  right: 22%;
  top: 8%;
`;

const ClockFacePosition2 = styled(ClockFacePosition)`
  right: 6%;
  top: 25%;
`;

const ClockFacePosition3 = styled(ClockFacePosition)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const ClockFacePosition4 = styled(ClockFacePosition)`
  bottom: 25%;
  right: 6%;
`;

const ClockFacePosition5 = styled(ClockFacePosition)`
  bottom: 8%;
  right: 22%;
`;

const ClockFacePosition6 = styled(ClockFacePosition)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const ClockFacePosition7 = styled(ClockFacePosition)`
  bottom: 8%;
  left: 22%;
`;

const ClockFacePosition8 = styled(ClockFacePosition)`
  bottom: 25%;
  left: 6%;
`;

const ClockFacePosition9= styled(ClockFacePosition)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const ClockFacePosition10 = styled(ClockFacePosition)`
  left: 6%;
  top: 25%;
`;

const ClockFacePosition11 = styled(ClockFacePosition)`
  left: 22%;
  top: 8%;
`;

const ClockFacePosition12 = styled(ClockFacePosition)`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

function App() {
  const [forecasts, setForecasts] = useState<IForecast[]>([]);

  const [clockForecasts, setClockedForecasts] = useState<IForecast[]>([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=48.1351&lon=11.5820&exclude=current,minutely,daily,alerts,flags&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(response => {
        console.log({response});
        setForecasts(response.hourly.slice(0, 12));
      });
  }, []);

  useEffect(() => {
    if (forecasts.length === 12) {
      const sortedForecasts = new Array(12);

      forecasts.forEach((forecast => {
        const hour = (new Date(forecast.dt * 1000)).getHours();
        if (hour > 12) {
          sortedForecasts[ hour - 12 ] = forecast;
        } else {
          sortedForecasts[ hour ] = forecast;
        }
      }));

      console.log({sortedForecasts});
      setClockedForecasts(sortedForecasts);
    } else {
      setClockedForecasts([]);
    }
  }, [ forecasts ]);

  return (
    <div>
      { clockForecasts.length === 12 &&
        <ClockFace>
          <ClockFacePosition1 forecast={ clockForecasts[1] }/>
          <ClockFacePosition2 forecast={ clockForecasts[2] }/>
          <ClockFacePosition3 forecast={ clockForecasts[3] }/>
          <ClockFacePosition4 forecast={ clockForecasts[4] }/>
          <ClockFacePosition5 forecast={ clockForecasts[5] }/>
          <ClockFacePosition6 forecast={ clockForecasts[6] }/>
          <ClockFacePosition7 forecast={ clockForecasts[7] }/>
          <ClockFacePosition8 forecast={ clockForecasts[8] }/>
          <ClockFacePosition9 forecast={ clockForecasts[9] }/>
          <ClockFacePosition10 forecast={ clockForecasts[10] }/>
          <ClockFacePosition11 forecast={ clockForecasts[11] }/>
          <ClockFacePosition12 forecast={ clockForecasts[0] }/>
        </ClockFace>
      }
    </div>
  );
}

export default App;
