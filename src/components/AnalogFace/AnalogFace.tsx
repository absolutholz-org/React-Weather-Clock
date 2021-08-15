import { useEffect, useState } from 'react';
import * as S from './AnalogFace.styled';

import useInterval from './../../hooks/useInterval';

function AnalogFace (): JSX.Element {
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useInterval(
        () => {
          const now = new Date();
          setMinutes(now.getMinutes());
          setHours(now.getHours());
        },
        30000,
    );

    useEffect(() => {
        const now = new Date();
        setMinutes(now.getMinutes());
        setHours(now.getHours());
    }, []);

    console.log('render AnalogFace');

    return (
        <S.Face>
            <S.HourHand hours={ hours } minutes={ minutes } />
            <S.MinuteHand minutes={ minutes } />
        </S.Face>
    )
}

export default AnalogFace;
