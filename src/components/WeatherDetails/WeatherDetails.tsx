import { IForecast } from "../../App";

import { Container, DetailsList, DetailsTerm, DetailsData } from './WeatherDetails.styled';

interface IWeatherDetailsProps {
    forecast: IForecast;
    onClick: () => void;
}

function WeatherDetails ({ forecast, onClick}: IWeatherDetailsProps): JSX.Element {
    const now = new Date(forecast.dt * 1000);
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return (
        <Container onClick={ onClick }>
            <DetailsList>
                {/* <DetailsTerm>Day</DetailsTerm>
                <DetailsData>{ now.toLocaleString('en-US', { weekday: 'long' }) }</DetailsData> */}
                <DetailsTerm>Time</DetailsTerm>
                <DetailsData>{ hours }:{ minutes > 10 ? minutes : `0${ minutes }` }</DetailsData>
                <DetailsTerm>Weather</DetailsTerm>
                <DetailsData>{ forecast.weather[0].description }</DetailsData>
                <DetailsTerm>Temperature</DetailsTerm>
                <DetailsData>{ Math.round(forecast.temp) }˚ C</DetailsData>
                <DetailsTerm>Feels like</DetailsTerm>
                <DetailsData>{ Math.round(forecast.feels_like) }˚ C</DetailsData>
                <DetailsTerm>Humidity</DetailsTerm>
                <DetailsData>{ Math.round(forecast.humidity) } %</DetailsData>
                { forecast.pop !== undefined &&
                    <>
                        <DetailsTerm><abbr aria-label="Probability of Precipitation" title="Probability of Precipitation">POP</abbr></DetailsTerm>
                        <DetailsData>{ Math.round(forecast.pop * 100) } %</DetailsData>
                    </>
                }
                <DetailsTerm>Wind</DetailsTerm>
                <DetailsData>{ forecast.wind_speed } - { forecast.wind_gust }</DetailsData>
                <DetailsTerm><abbr aria-label="Ultraviolet Index" title="Ultraviolet Index">UVI</abbr></DetailsTerm>
                <DetailsData>{ forecast.uvi }</DetailsData>
            </DetailsList>
        </Container>
    );
}

export default WeatherDetails;
