import { IForecast } from './../../App';
import * as S from './WeatherFace.styled';

interface WeatherFaceProps {
    forecasts: IForecast[];
    sunrise: Date;
    sunset: Date;
}

function WeatherFace ({ forecasts, sunrise, sunset }: WeatherFaceProps): JSX.Element {
    console.log('render WeatherFace');
    return (
        <S.Face>
            <S.Position1 forecast={ forecasts[1] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position2 forecast={ forecasts[2] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position3 forecast={ forecasts[3] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position4 forecast={ forecasts[4] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position5 forecast={ forecasts[5] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position6 forecast={ forecasts[6] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position7 forecast={ forecasts[7] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position8 forecast={ forecasts[8] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position9 forecast={ forecasts[9] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position10 forecast={ forecasts[10] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position11 forecast={ forecasts[11] } sunrise={ sunrise } sunset={ sunset } />
            <S.Position12 forecast={ forecasts[0] } sunrise={ sunrise } sunset={ sunset } />
        </S.Face>
    );
}

export default WeatherFace;
