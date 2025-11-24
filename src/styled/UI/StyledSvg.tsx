import styled from "styled-components";

interface StyledSvgProps {
  fill?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  size?: number | string;
}

export const StyledSvg = styled.svg<StyledSvgProps>`
  fill: ${(p) => p.fill};
  margin-top: ${(p) => p.marginTop ?? 0};
  margin-right: ${(p) => p.marginRight ?? 0};
  margin-bottom: ${(p) => p.marginBottom ?? 0};
  margin-left: ${(p) => p.marginLeft ?? 0};
  width: ${(p) => p.size ?? "24px"};
  height: ${(p) => p.size ?? "24px"};
`;
