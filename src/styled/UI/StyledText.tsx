import styled, { css } from 'styled-components';
import type { CSSProperties } from 'react';
// import fonts from 'theme/fonts';
import sizes from 'theme/sizes';
// import marginProps from 'styled/shared-props/margin';
// import paddingProps from 'styled/shared-props/padding';
import colors from 'theme/colors';

//
// TIPOS QUE SUAS TAGS RECEBEM
//
export type TextName =
    | 'hero'
    | 'title'
    | 'subtitle'
    | 'highlight'
    | 'default'
    | 'small'
    | 'mini';

export type TextType = 'normal' | 'bold' | 'italic';

export interface StyledTextBaseProps {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;

    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    paddingLeft?: string | number;

    name?: TextName;
    type?: TextType;
    color?: string;
    decoration?: string;
    textAlign?: CSSProperties['textAlign'];
    ellipsisAt?: number | string;
}

export const StyledTitle = styled.h1<StyledTextBaseProps>`
    font-weight: ${fonts.weight.bold};
    ${marginProps};
    ${paddingProps};
    text-align: ${props => props.textAlign};

    ${({ color }) =>
        color &&
        css`
            color: ${color} !important;
        `};

    ${({ name }) =>
        name === 'hero' &&
        css`
            font-size: ${fonts.sizes.hero};
        `};

    ${({ name }) =>
        name === 'title' &&
        css`
            font-size: ${fonts.sizes.title};
        `};

    ${({ ellipsisAt }) =>
        ellipsisAt &&
        css`
            max-width: ${ellipsisAt};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `};
`;

export const StyledSubtitle = styled.h2<StyledTextBaseProps>`
    font-weight: ${fonts.weight.bold};
    ${marginProps};
    ${paddingProps};
    text-align: ${props => props.textAlign};

    ${({ color }) =>
        color &&
        css`
            color: ${color} !important;
        `};

    ${({ name }) =>
        name === 'subtitle' &&
        css`
            font-size: ${fonts.sizes.subtitle};
        `};

    ${({ ellipsisAt }) =>
        ellipsisAt &&
        css`
            max-width: ${ellipsisAt};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `};
`;


export const StyledHighlight = styled.h3<StyledTextBaseProps>`
    font-weight: ${fonts.weight.bold};
    ${marginProps};
    ${paddingProps};
    text-align: ${props => props.textAlign};

    ${({ color }) =>
        color &&
        css`
            color: ${color} !important;
        `};

    ${({ name }) =>
        name === 'highlight' &&
        css`
            font-size: ${fonts.sizes.highlight};
        `};

    ${({ ellipsisAt }) =>
        ellipsisAt &&
        css`
            max-width: ${ellipsisAt};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `};
`;

//
// PARAGRAPH
//
export const StyledParagraph = styled.p<StyledTextBaseProps>`
    ${marginProps};
    ${paddingProps};
    text-align: ${props => props.textAlign};

    ${({ color }) =>
        color &&
        css`
            color: ${color} !important;
        `};

    ${({ type }) =>
        type === 'italic' &&
        css`
            font-style: ${fonts.style.italic};
        `};

    ${({ type }) =>
        type === 'bold' &&
        css`
            font-weight: ${fonts.weight.bold};
        `};

    ${({ type }) =>
        type === 'normal' &&
        css`
            font-weight: ${fonts.weight.regular};
        `};

    ${({ decoration }) =>
        decoration &&
        css`
            text-decoration: ${decoration};
        `};

    ${({ name }) =>
        name === 'default' &&
        css`
            font-size: ${fonts.sizes.default};
        `};

    ${({ name }) =>
        name === 'small' &&
        css`
            font-size: ${fonts.sizes.small};
        `};

    ${({ name }) =>
        name === 'mini' &&
        css`
            font-size: ${fonts.sizes.mini};
        `};

    ${({ ellipsisAt }) =>
        ellipsisAt &&
        css`
            max-width: ${ellipsisAt};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `};
`;


StyledTitle.defaultProps = {
    paddingBottom: sizes.small
};

StyledSubtitle.defaultProps = {
    paddingBottom: sizes.little
};

StyledHighlight.defaultProps = {
    paddingBottom: sizes.tiny
};

StyledParagraph.defaultProps = {
    paddingBottom: sizes.mini
};
