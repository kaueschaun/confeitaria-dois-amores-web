import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../theme/colors";

// TIPOS DE VARIANTES
const variants = {
  default: css`
    background: ${colors.backgroundPrimary};
    color: ${colors.white};
    &:hover {
      background: ${colors.backgroundSecondary};
    }
  `,
  featured: css`
    background: ${colors.backgroundSecondary};
    color: ${colors.white};
    &:hover {
      background: ${colors.backgroundSecondary};
    }
  `,

  borded: css`
    background: transparent;
    color: ${colors.backgroundPrimary};
    border: 1px solid ${colors.primaryBorder};
    &:hover {
      background: ${colors.backgroundPrimary};
      color: ${colors.white}
    }
  `,

  
  outline: css`
    box-shadow: none;
    font-weight: 600;
    background: transparent !important;
    border:  none;
    text-decoration: none;
    color: ${colors.backgroundPrimary};
    padding: 5px !important;
    width: 100%;
    &:hover {
        border:  none !important;
    }
  `,
};

// TAMANHOS
const sizes = {
  sm: css`
    padding: 6px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 10px 16px;
    font-size: 15px;
  `,
  lg: css`
    padding: 14px 20px;
    font-size: 16px;
  `
};

export const StyledButton = styled.button<{
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;

  variant?: string;
  category?: string;
  size?: string | number;
}>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease-in-out;

  /* MARGENS */
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-left: ${({ marginLeft }) => marginLeft || 0};

  /* TAMANHO */
  ${({ size }) =>
    typeof size === "string"
      ? sizes[size as keyof typeof sizes]
      : css`
          padding: 10px 14px;
        `}

  /* VARIANT */
  ${({ variant }) =>
    variant && variants[variant as keyof typeof variants]
      ? variants[variant as keyof typeof variants]
      : variants.default}
`;

export const StyledRouteLink = styled(Link)`
  text-decoration: none;
`;
