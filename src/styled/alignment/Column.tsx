'use client';
import React from 'react';
import styles from './Alignment.module.scss';
import clsx from 'clsx';

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: string | number;
  width?: string;
  height?: string;
  minWidth?: string;
  gap?: string;
  horizontalCenter?: boolean;
  verticalCenter?: boolean;
  fullyCentralized?: boolean;
  children?: React.ReactNode;
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(({
  flex, width, height, minWidth, gap,
  horizontalCenter, verticalCenter, fullyCentralized,
  className, style, children, ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.column,
        {
          [styles.horizontalCenter]: horizontalCenter,
          [styles.verticalCenter]: verticalCenter,
          [styles.fullyCentralized]: fullyCentralized,
        },
        className
      )}
      style={{ flex, width, height, minWidth, gap, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
Column.displayName = 'Column';
