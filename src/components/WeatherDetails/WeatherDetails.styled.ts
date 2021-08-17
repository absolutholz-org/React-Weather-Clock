import styled from 'styled-components';

export const Container = styled.button`
    background: hsl(0, 0%, 100%);
    border-radius: 50%;
    height: 78%;
    left: 11%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10%;
    position: absolute;
    top: 11%;
    width: 78%;
`;

export const DetailsList = styled.dl`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0;
    position: relative;

    &::after {
        background: hsl(0, 0%, 0%);
        content: "";
        display: block;
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        width: 1px;
    }
`;

export const DetailsTerm = styled.dl`
    font-size: 1.25rem;
    font-weight: 100;
    margin: 0 1rem 0.5rem auto;
    text-align: end;
`;

export const DetailsData = styled.dl`
    font-size: 1.5rem;
    line-height: 1.15;
    margin: 0 auto 0.5rem 1rem;
    text-align: start;
`;
