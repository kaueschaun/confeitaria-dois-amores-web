import styled, { css } from 'styled-components';


interface RowProps {
    flex?: string | number;
    width?: string;
    height?: string;
    minWidth?: string;
    gap?: string;
    horizontalCenter?: boolean;
    verticalCenter?: boolean;
    fullyCentralized?: boolean;
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    flex: ${({ flex}) => flex};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    min-width: ${({ minWidth }) => minWidth};
    gap: ${({ gap }) => gap};

    ${({ horizontalCenter }) =>
    horizontalCenter &&
    css`
      justify-content: center;
    `}

    ${({ verticalCenter}) => 
    verticalCenter &&
    css`
      align-items: center;
    `}

    ${({ fullyCentralized }) =>
    fullyCentralized &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

Row.defaultProps = {
    width: '100%',
};
