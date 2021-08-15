import { IForecast } from './../../App';
import WeatherIcon from './../WeatherIcon';
import * as S from './WeatherButton.styled';

interface IWeatherButtonProps {
    forecast: IForecast;
    className?: string;
    sunrise: Date;
    sunset: Date;
}

function WeatherButton ({ className, forecast, sunrise, sunset }: IWeatherButtonProps): JSX.Element {
    const time = new Date(forecast.dt * 1000);
    const isDaytime = time > sunrise && time < sunset;

    return (
        <S.Button className={ className } title={ time.toString() } type="button">
            <WeatherIcon iconCode={ forecast.weather[0].id } isDaytime={ isDaytime } />
            {/* <span>{ Math.round(forecast.temp) }˚</span> */}
        </S.Button>
    )
}

export default WeatherButton;
