import { useState } from 'react';

import { IForecast } from './../../App';
import * as S from './WeatherFace.styled';

import WeatherDetails from './../WeatherDetails';

interface WeatherFaceProps {
    forecasts: IForecast[];
    sunrise: Date;
    sunset: Date;
}

function WeatherFace ({ forecasts, sunrise, sunset }: WeatherFaceProps): JSX.Element {
    console.log('render WeatherFace');

    const [ selectedForecast, setSelectedForecast ] = useState<IForecast | null>(null);

    const onButtonClick = (forecast: IForecast) => {
        console.log(forecast);
        setSelectedForecast(forecast);
    };

    const onDetailsClick = () => {
        setSelectedForecast(null);
    };

    return (
        <S.Face>
            { selectedForecast &&
                <WeatherDetails forecast={ selectedForecast } onClick={ onDetailsClick } />
            }
            <S.Position1 forecast={ forecasts[1] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position2 forecast={ forecasts[2] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position3 forecast={ forecasts[3] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position4 forecast={ forecasts[4] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position5 forecast={ forecasts[5] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position6 forecast={ forecasts[6] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position7 forecast={ forecasts[7] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position8 forecast={ forecasts[8] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position9 forecast={ forecasts[9] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position10 forecast={ forecasts[10] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position11 forecast={ forecasts[11] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
            <S.Position12 forecast={ forecasts[0] } sunrise={ sunrise } sunset={ sunset } onClick={ onButtonClick } />
        </S.Face>
    );
}

export default WeatherFace;
