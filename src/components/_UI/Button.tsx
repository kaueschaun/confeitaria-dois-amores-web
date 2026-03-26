'use client';
import { type FC, type ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    marginLeft?: string | number;

    variant?: string;
    category?: string;
    size?: string | number;
    fullWidth?: boolean;

    path?: string;
    children?: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    variant = 'default',
    size,
    fullWidth,
    children,
    path,
    className
}) => {
    const commonProps = {
        className: clsx(
            styles.button,
            styles[`button--variant-${variant}`],
            size && typeof size === 'string' ? styles[`button--size-${size}`] : (!size && styles['button--size-default']),
            { [styles['button--fullWidth']]: fullWidth },
            className
        ),
        style: {
            marginTop: marginTop || 0,
            marginRight: marginRight || 0,
            marginBottom: marginBottom || 0,
            marginLeft: marginLeft || 0,
            ...(typeof size === 'number' ? { padding: `${size}px` } : {})
        }
    };

    if (path) {
        return (
            <Link href={path} {...commonProps}>
                {children}
            </Link>
        );
    }

    return (
        <button {...commonProps}>
            {children}
        </button>
    );
};

export default Button;
