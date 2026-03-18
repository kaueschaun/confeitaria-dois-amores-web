'use client';
import styled, { css } from "styled-components";
import Link from "next/link";
import colors from "../../theme/colors";

// TIPOS DE VARIANTES
const variants = {
  default: css`
    background: ${colors.primary};
    color: ${colors.white};
    &:hover {
      background: ${colors.backgroundSecondary};
    }
  `,
  secondary: css`
    background: ${colors.white};
    color: ${colors.secondary};
    border: 1px solid ${colors.grayLight};
    &:hover {
      background: ${colors.grayLight};
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
    color: ${colors.secondary};
    border: 1px solid ${colors.primaryBorder};
    &:hover {
      background: ${colors.secondary};
      color: ${colors.white};
      opacity: 0.9;
    }
  `,


  outline: css`
    box-shadow: none;
    font-weight: 600;
    background: transparent !important;
    border:  none;
    text-decoration: none;
    color: ${colors.secondary};
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

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'variant', 'category', 'size', 'fullWidth'].includes(prop)
})<{
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;

  variant?: string;
  category?: string;
  size?: string | number;
  fullWidth?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

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
