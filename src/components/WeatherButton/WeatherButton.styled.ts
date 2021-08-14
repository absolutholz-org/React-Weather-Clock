import styled from 'styled-components';

export const Button = styled.button`
    background: none;
    border: 0;
    border-radius: 0;
    display: inline-block;
    font: inherit;
    margin: 0;
    padding: 0;

    > svg {
        display: flex;
        font-size: min(12vmin, 4rem);
        height: 1em;
        width: 1em;
    }
`;
