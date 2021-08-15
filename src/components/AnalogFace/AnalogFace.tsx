import * as S from './AnalogFace.styled';

interface IAnalogFaceProps {
    hours: number;
    minutes: number;
}

function AnalogFace ({ hours, minutes }: IAnalogFaceProps): JSX.Element {
    return (
        <S.Face>
            <S.HourHand hours={ hours } minutes={ minutes } />
            <S.MinuteHand minutes={ minutes } />
        </S.Face>
    )
}

export default AnalogFace;
