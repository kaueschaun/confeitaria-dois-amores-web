'use client';
import styled, { css } from "styled-components";

// ---------------------------------------------
// Base styles
// ---------------------------------------------
const margin = css<any>`
    margin-top: ${({ $marginTop }) => $marginTop};
    margin-right: ${({ $marginRight }) => $marginRight};
    margin-bottom: ${({ $marginBottom }) => $marginBottom};
    margin-left: ${({ $marginLeft }) => $marginLeft};
`;

const padding = css<any>`
    padding-top: ${({ $paddingTop }) => $paddingTop};
    padding-right: ${({ $paddingRight }) => $paddingRight};
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom};
    padding-left: ${({ $paddingLeft }) => $paddingLeft};
`;


const commonStyles = css<any>`
    ${margin};
    ${padding};
    text-align: ${({ $textAlign }) => $textAlign};
    color: ${({ $color }) => $color};

    ${({ $type }) =>
        $type === "bold" &&
        css`
            font-weight: bold;
        `}

    ${({ $type }) =>
        $type === "italic" &&
        css`
            font-style: italic;
        `}

    ${({ $ellipsisAt }) =>
        $ellipsisAt &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: ${$ellipsisAt}px;
        `}
`;

// ---------------------------------------------
// Styled Components
// ---------------------------------------------
export const StyledTitle = styled.h1<any>`
    ${commonStyles};

    font-size: ${({ $name }) =>
        $name === "hero" ? "48px" : "32px"};
`;

export const StyledSubtitle = styled.h2<any>`
    ${commonStyles};

    font-size: 20px;
`;

export const StyledTextPersonalized = styled.p<any>`
  ${commonStyles};

  font-size: ${({ $size }) => $size || '16px'};
  font-weight: ${({ $weight }) => $weight || '400'};
  line-height: ${({ $line }) => $line || '1.5rem'};
`;

export const StyledHighlight = styled.span<any>`
    ${commonStyles};

    font-weight: bold;
    color: ${({ $color }) => $color || "#ffb400"};
`;

export const StyledParagraph = styled.p<any>`
    ${commonStyles};

    ${({ $decoration }) =>
        $decoration &&
        css`
            text-decoration: ${$decoration};
        `}
`;
