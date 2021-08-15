import styled, { css } from 'styled-components';

export const Face = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &::after {
        aspect-ratio: 1 / 1;
        background: black;
        border-radius: 50%;
        content: "";
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: max(5%, 0.75rem);
    }
`;

const Hand = styled.span`
  border-radius: 9rem;
  display: block;
  position: absolute;
  bottom: 50%;
  transform-origin: 50% 100%;
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
    background: var(--highlight, hsl(0deg 68% 42%));
    left: 48%;
    padding-bottom: 25%;
    width: max(4%, 0.5rem);
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
    background: currentColor;
    left: 49%;
    padding-bottom: 35%;
    width: max(2%, 0.25rem);
`;
