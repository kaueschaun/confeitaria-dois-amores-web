import styled, { css } from "styled-components";

// ---------------------------------------------
// Base styles
// ---------------------------------------------
const margin = css`
    margin-top: ${({ marginTop }) => marginTop};
    margin-right: ${({ marginRight }) => marginRight};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    margin-left: ${({ marginLeft }) => marginLeft};
`;

const padding = css`
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-right: ${({ paddingRight }) => paddingRight};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
    padding-left: ${({ paddingLeft }) => paddingLeft};
`;

const commonStyles = css`
    ${margin};
    ${padding};
    text-align: ${({ textAlign }) => textAlign};
    color: ${({ color }) => color};

    ${({ type }) =>
        type === "bold" &&
        css`
            font-weight: bold;
        `}

    ${({ type }) =>
        type === "italic" &&
        css`
            font-style: italic;
        `}

    ${({ ellipsisAt }) =>
        ellipsisAt &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: ${ellipsisAt}px;
        `}
`;

// ---------------------------------------------
// Styled Components
// ---------------------------------------------
export const StyledTitle = styled.h1`
    ${commonStyles};

    font-size: ${({ name }) =>
        name === "hero" ? "48px" : "32px"};
`;

export const StyledSubtitle = styled.h2`
    ${commonStyles};

    font-size: 20px;
`;

export const StyledHighlight = styled.span`
    ${commonStyles};

    font-weight: bold;
    color: ${({ color }) => color || "#ffb400"};
`;

export const StyledParagraph = styled.p`
    ${commonStyles};

    ${({ decoration }) =>
        decoration &&
        css`
            text-decoration: ${decoration};
        `}
`;
