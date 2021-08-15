import styled, { css } from 'styled-components';

export const Face = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const Hand = styled.span`
  border-radius: 3px;
  display: block;
  position: absolute;
  bottom: 48%;
  transform-origin: 50% 94%;
`;

interface IHourHandProps {
    hours: number;
    minutes: number;
}

export const HourHand = styled(Hand)<IHourHandProps>`
  ${({ hours, minutes }) =>
    hours &&
    minutes &&
    css`
      transform: rotate(${(hours / 12) * 360 + (minutes / 60) * 30}deg);
    `}
    background: firebrick;
    left: 48%;
    padding-bottom: 25%;
    width: 4%;
`;

interface IMinuteHandProps {
    minutes: number;
}

export const MinuteHand = styled(Hand)<IMinuteHandProps>`
  ${({ minutes }) =>
    minutes &&
    css`
      transform: rotate(${(minutes / 60) * 360}deg);
    `}
    background: royalblue;
    left: 49%;
    padding-bottom: 35%;
    width: 2%;
`;
