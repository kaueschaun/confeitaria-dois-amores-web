'use client';
import React from 'react';
import styles from './Alignment.module.scss';
import clsx from 'clsx';

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    textAlign?: any;
    children?: React.ReactNode;
}

export const HorizontalCenter = React.forwardRef<HTMLDivElement, CenterProps>(({
    width = '100%', height, textAlign, className, style, children, ...props
}, ref) => (
    <div ref={ref} className={clsx(styles.horizontalCenterDiv, className)} style={{ width, height, textAlign, ...style }} {...props}>
        {children}
    </div>
));
HorizontalCenter.displayName = 'HorizontalCenter';

export const VerticalCenter = React.forwardRef<HTMLDivElement, CenterProps>(({
    width = '100%', height, textAlign, className, style, children, ...props
}, ref) => (
    <div ref={ref} className={clsx(styles.verticalCenterDiv, className)} style={{ width, height, textAlign, ...style }} {...props}>
        {children}
    </div>
));
VerticalCenter.displayName = 'VerticalCenter';

export const FullyCentered = React.forwardRef<HTMLDivElement, CenterProps>(({
    width = '100%', height, textAlign, className, style, children, ...props
}, ref) => (
    <div ref={ref} className={clsx(styles.fullyCenteredDiv, className)} style={{ width, height, textAlign, ...style }} {...props}>
        {children}
    </div>
));
FullyCentered.displayName = 'FullyCentered';
