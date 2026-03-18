'use client';
import styled from 'styled-components';

interface CenterProps {
    width?: string;
    height?: string;
    textAlign?: string;
}

export const HorizontalCenter = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'textAlign'].includes(prop)
})<CenterProps>`
    display: flex;
    justify-content: center;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    text-align: ${({ textAlign }) => textAlign};
`;

export const VerticalCenter = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'textAlign'].includes(prop)
})<CenterProps>`
    display: flex;
    align-items: center;
    width: ${ props => props.width};
    height: ${ props => props.height};
    text-align: ${ props => props.textAlign};
`;

export const FullyCentered = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height', 'textAlign'].includes(prop)
})<CenterProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ props => props.width};
    height: ${ props => props.height};
    text-align: ${ props => props.textAlign};
`;

HorizontalCenter.defaultProps = {
    width: '100%',
};

VerticalCenter.defaultProps = {
    width: '100%',
};

FullyCentered.defaultProps = {
    width: '100%',
};
