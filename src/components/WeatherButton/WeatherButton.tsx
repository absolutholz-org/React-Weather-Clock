import styled from 'styled-components';

import { IForecast } from './../../App';
import WeatherIcon from './../WeatherIcon';

const Button = styled.button`
    background: none;
    border: 0;
    border-radius: 0;
    display: inline-block;
    font: inherit;
    margin: 0;
    padding: 0;

    > svg {
        font-size: 3rem;
        height: 1em;
        width: 1em;
    }
`;

interface IWeatherButtonProps {
    forecast: IForecast;
    className?: string;
}

function WeatherButton ({ className, forecast }: IWeatherButtonProps): JSX.Element {
    const time = new Date(forecast.dt * 1000);

    return (
        <Button className={ className } title={ time.toString() } type="button">
            <WeatherIcon iconCode={ forecast.weather[0].id } isDaytime={ false } />
            {/* <span>{ Math.round(forecast.temp) }˚</span> */}
        </Button>
    )
}

export default WeatherButton;
