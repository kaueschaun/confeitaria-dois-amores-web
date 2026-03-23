'use client';
import React, { SVGProps } from 'react';

export interface StyledSvgProps extends SVGProps<SVGSVGElement> {
  fill?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  size?: number | string;
}

export const StyledSvg: React.FC<StyledSvgProps> = ({
  fill,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  size = "24px",
  style,
  ...props
}) => {
  return (
    <svg
      style={{
        fill,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        width: size,
        height: size,
        ...style
      }}
      {...props}
    />
  );
};
