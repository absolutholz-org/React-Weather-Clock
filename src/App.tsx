import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTime } from 'react-timer-hook';

import WeatherFace from './components/WeatherFace';
import AnalogFace from './components/AnalogFace';

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
  padding: 2%;
  position: relative;
  width: 100%;
`;

const LContainer = styled.div`
  margin: auto;
  padding: 1rem;
`;

function App() {
  const [forecasts, setForecasts] = useState<IForecast[]>([]);
  const [sunrise, setSunrise] = useState<Date | null>(null);
  const [sunset, setSunset] = useState<Date | null>(null);
  const {
    minutes,
    hours,
  } = useTime({ format: '12-hour'});

  const [clockForecasts, setClockedForecasts] = useState<IForecast[]>([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=48.1351&lon=11.5820&exclude=minutely,daily,alerts,flags&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
      .then(response => response.json())
      .then(response => {
        console.log({response});

        const { hourly, current } = response;

        setForecasts(hourly.slice(0, 12));
        setSunrise(new Date(current.sunrise * 1000));
        setSunset(new Date(current.sunset * 1000));
      });
  }, []);

  useEffect(() => {
    if (forecasts.length === 12) {
      const sortedForecasts = new Array(12);

      forecasts.forEach((forecast => {
        const hour = (new Date(forecast.dt * 1000)).getHours();
        if (hour === 12 || hour === 24) {
          sortedForecasts[ 0 ] = forecast;
        } else if (hour > 12) {
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
    <LContainer>
        <ClockFace>
          <AnalogFace hours={ hours } minutes={ minutes } />
          { clockForecasts.length === 12 && sunrise && sunset &&
            <WeatherFace forecasts={ clockForecasts } sunrise={ sunrise } sunset={ sunset } />
          }
        </ClockFace>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>
      </div>
    </LContainer>
  );
}

export default App;
