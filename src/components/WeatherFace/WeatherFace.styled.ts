import styled from 'styled-components';

import WB from './../WeatherButton';

export const Face = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const Position = styled(WB)`
  position: absolute;
`;

export const Position1 = styled(Position)`
  right: 22%;
  top: 8%;
`;

export const Position2 = styled(Position)`
  right: 7%;
  top: 23%;
`;

export const Position3 = styled(Position)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Position4 = styled(Position)`
  bottom: 23%;
  right: 7%;
`;

export const Position5 = styled(Position)`
  bottom: 8%;
  right: 22%;
`;

export const Position6 = styled(Position)`
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Position7 = styled(Position)`
  bottom: 8%;
  left: 22%;
`;

export const Position8 = styled(Position)`
  bottom: 23%;
  left: 7%;
`;

export const Position9= styled(Position)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Position10 = styled(Position)`
  left: 7%;
  top: 23%;
`;

export const Position11 = styled(Position)`
  left: 22%;
  top: 8%;
`;

export const Position12 = styled(Position)`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;
